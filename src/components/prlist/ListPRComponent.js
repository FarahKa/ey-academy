import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, FlatList } from "react-native";
import colors from "../../config/colors";
import { Feather } from "@expo/vector-icons";
import MemberCardPR from "./MemberCardPR";
import {peerReviewActions} from "../../actions/peerReviewActions"
import { useDispatch } from "react-redux";
import { loadingActions } from "../../actions/loadingActions";
import { withNavigation } from "react-navigation";
import ButtonComponent from "../ButtonComponent";


const ListPR = ({ training, navigation }) => {
  const [toggle, setToggle] = useState(false);
  const [name, setName] = useState("chevron-up");
  const dispatch = useDispatch();

  
  const toggleStuff = () => {
    if (toggle) {
      setToggle(false);
      setName("chevron-up");
    } else {
      setToggle(true);
      setName("chevron-down");
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

                <MemberCardPR item={item} />
              );
            }}
          />
          <ButtonComponent label="Evaluate this group" onPress={() => {
                  if (!training.groups[0].evaluated) {
                    dispatch(loadingActions.startLoading());
                    dispatch(peerReviewActions.selectConsultantPR(training.groups[0]));
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
                                consultantId : item.id,
                                UserId: user.id,
                              })
                              .then(
                                () => {
                                  navigation.navigate("PeerReview");
                                },
                                (error) => {
                                  console.log(error);
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

export default withNavigation(ListPR);
