import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, TouchableOpacity, FlatList, Alert } from "react-native";
import colors from "../../config/colors";
import { Feather } from "@expo/vector-icons";
import MemberCardF from "./MemberCardF";
import {feedbackActions} from "../../actions/feedbackActions"
import { useDispatch } from "react-redux";
import { loadingActions } from "../../actions/loadingActions";
import { withNavigation } from "react-navigation";
import ButtonComponent from "../ButtonComponent";
import { evalService } from "../../services/evalService";
import { connect } from "react-redux";
import MemberCard from "../MemberCard";
import Dark from "../DarkComponent";


const ListF = ({ training, navigation, user }) => {
  const [toggle, setToggle] = useState(false);
  const [name, setName] = useState("chevron-down");
  const dispatch = useDispatch();

  const [label, setLabel] = useState("");
  useEffect(() => {
    if (training.evaluated) {
      setLabel("Give feedback again?");
    } else {
      setLabel("Give feedback!");
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
        <Text style={styles.title}>{training.trainingName}</Text>
        <Feather style={styles.icon} name={name}/>
      </TouchableOpacity>
      {toggle ? (
        <View style={styles.card}>
          <Dark><Text style={{color:colors.MISCHKA, alignSelf:"center"}}>Trainers:</Text></Dark>
          <FlatList
            data={training.groups[0].trainers}
            listKey={(item, index) => 'D' + index.toString()}
            keyExtractor={(member) => member.id}
            renderItem={({ item }) => {
              return (
                <MemberCard item={item} />
              );
            }}
          />
          <Dark><Text style={{color:colors.MISCHKA, alignSelf:"center"}}>Consultants:</Text></Dark>
            <FlatList
            listKey={(item, index) => 'D' + index.toString()}
            data={training.groups[0].consultants}
            keyExtractor={(member) => member.id}
            renderItem={({ item }) => {
              return (
                <MemberCard item={item}  />
              );
            }}
          />
          <View style={{marginHorizontal:10}}>
          <ButtonComponent label={label}
          color={colors.YELLOW}
          tcolor={colors.MISCHKA}
          
          onPress={() => {
                  if (!training.evaluated) {
                    dispatch(loadingActions.startLoading());
                    dispatch(feedbackActions.selectGroupF(training));
                    console.log("selected the training");
                    navigation.navigate("Feedback");
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
                            dispatch(feedbackActions.selectGroupF(training));
                            //STOPPED HERE
                            console.log("OK Pressed");
                            evalService
                              .deleteFeedback({
                                TrainingId: training.id,
                                UserId: user.id,
                              })
                              .then(
                                () => {
                                  navigation.navigate("Feedback");
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

export default withNavigation(connect(mapStateToProps)(ListF));
