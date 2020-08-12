import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, TouchableOpacity, FlatList, Alert } from "react-native";
import colors from "../../config/colors";
import { Feather } from "@expo/vector-icons";
import MemberCardPR from "./MemberCardPR";
import {peerReviewActions} from "../../actions/peerReviewActions"
import { useDispatch } from "react-redux";
import { loadingActions } from "../../actions/loadingActions";
import { withNavigation } from "react-navigation";
import ButtonComponent from "../ButtonComponent";
import { evalService } from "../../services/evalService";
import { connect } from "react-redux";
import MemberCard from "../MemberCard";


const ListPR = ({ training, navigation, user }) => {
  const [toggle, setToggle] = useState(false);
  const [name, setName] = useState("chevron-down");
  const dispatch = useDispatch();

  const [label, setLabel] = useState("");
  useEffect(() => {
    if (training.groups[0].evaluated) {
      setLabel("Reevaluate my group");
    } else {
      setLabel("Evaluate my group");
    }
  }, []);

  
  const toggleStuff = () => {
    if (toggle) {
      setToggle(false);
      setName("chevron-down");
    } else {
      setToggle(true);
      setName("chevron-up");
    }
  };

  return (
    <View>
      <TouchableOpacity style={styles.background} onPress={toggleStuff}>
        <Text style={styles.title}>{training.name}</Text>
        <Feather style={styles.icon} name={name}/>
      </TouchableOpacity>
      {toggle ? (
        <View style={styles.card}>
            <FlatList
            data={training.groups[0].consultants}
            keyExtractor={(member) => member.id}
            renderItem={({ item }) => {
              return (

                <MemberCard item={item} />
              );
            }}
          />
          <View style={{marginHorizontal:10}}>
          <ButtonComponent label={label}
          color={colors.YELLOW}
          
          onPress={() => {
                  if (!training.groups[0].evaluated) {
                    dispatch(loadingActions.startLoading());
                    dispatch(peerReviewActions.selectConsultantPR(training.groups[0]));
                    console.log("selected the group");
                    navigation.navigate("PeerReview");
                  } else {
                    Alert.alert(
                      "Warning",
                      "Reevaluating deletes previous evaluations. Continue?",
                      [
                        {
                          text: "Cancel",
                          onPress: () => {
                            console.log("Cancel Pressed");
                          },
                          style: "cancel",
                        },
                        {
                          text: "Yes",
                          onPress: () => {
                            dispatch(loadingActions.startLoading());
                            dispatch(peerReviewActions.selectConsultantPR(training.groups[0]));
                            //STOPPED HERE
                            console.log("OK Pressed");
                            evalService
                              .deletePeerReview({
                                gbtId: training.groups[0].gbtId,
                                UserId: user.id,
                              })
                              .then(
                                () => {
                                  navigation.navigate("PeerReview");
                                },
                                (error) => {
                                  console.log(error);
                                  dispatch(loadingActions.stopLoading());
                                }
                              );
                          },
                        },
                      ],
                      { cancelable: false }
                    );
                  }
                }}/>

          </View>

        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    marginTop: 5,
    //marginBottom: 5,
    backgroundColor: colors.MISCHKA,
    height: 50,
    //borderRadius: 3,
    marginHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  card: {
    backgroundColor: "rgba(0,0,0,0.3)",
    flex: 1,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  title: {
    //fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    //marginBottom: 5,
    textTransform: "uppercase",
    color: colors.DARK_GREY,
  },
  iconStyle: {
    fontSize: 40,
    alignSelf: "center",
    marginHorizontal: 15,
  },
  icon: {
    fontSize:18,
    marginRight:5,
  }
});

const mapStateToProps = (state) => {
  //const { group } = state.selectGroupJury;
  const { user } = state.authentication;
  return { user };
};

export default withNavigation(connect(mapStateToProps)(ListPR));
