import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Alert,
} from "react-native";
//import { FlatList } from "react-native-gesture-handler";
import MemberCard from "../components/MemberCard";
import { SafeAreaView } from "react-native-safe-area-context";
import ThemeComponent from "../components/ThemeComponent";
import colors, { dimmer } from "../config/colors";
import ButtonComponent from "../components/ButtonComponent";
import { trainingActions } from "../actions";
import { connect } from "react-redux";
import { withNavigation } from "react-navigation";
import { evalService } from "../services/evalService";
import { loadingActions } from "../actions/loadingActions";

const GroupJuryScreen = ({ navigation, user }) => {
  const [label, setLabel] = useState("");
  const item = navigation.getParam("item");

  useEffect(() => {
    if (item.evaluated) {
      setLabel("Reevaluate " + item.name);
    } else {
      setLabel("Evaluate " + item.name);
    }
  }, []);

    useEffect(() => {
    console.log(navigation.dangerouslyGetParent().state.routes);
  }, []);

  return (
    <ThemeComponent>
      <SafeAreaView style={[{ flex: 1 }, dimmer.dimmer]}>
        <View style={styles.container}>
          <ButtonComponent
            label={label}
            onPress={() => {
              if (!item.evaluated) {
                dispatch(loadingActions.startLoading());
                dispatch(trainingActions.selectGroupJury(item));
                navigation.navigate("EvalJury");
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
                        dispatch(trainingActions.selectGroupJury(item));
                        console.log("OK Pressed");
                        evalService
                          .deleteAssessmentJury({
                            gbtId: item.gbtId,
                            UserId: user.id,
                          })
                          .then(
                            () => {
                              navigation.navigate("EvalJury");
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
            }}
          />

          <FlatList
            data={item.consultants}
            keyExtractor={(member) => member.id}
            renderItem={({ item }) => {
              return (
                // <TouchableOpacity
                //   onPress={() => {
                //     navigation.navigate("MemberAssessment", { item: item });
                //   }}
                // >
                <MemberCard item={item} />
                // </TouchableOpacity>
              );
            }}
          />
        </View>
      </SafeAreaView>
    </ThemeComponent>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginTop: 20,
  },
  group: {
    fontWeight: "bold",
    color: colors.MISCHKA,
  },
});

const mapStateToProps = (state) => {
  //const { group } = state.selectGroupJury;
  const { user } = state.authentication;
  return { user };
};

export default withNavigation(connect(mapStateToProps)(GroupJuryScreen));
