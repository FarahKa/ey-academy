import React, { useState } from "react";
import { Text, StyleSheet, Alert } from "react-native";
import SearchBar from "../../components/SearchBar";
import { FlatList } from "react-native-gesture-handler";
import { connect, useDispatch } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";
import ThemeComponent from "../../components/ThemeComponent";
import List from "../../components/toggleList/ListComponent";
import colors from "../../config/colors";
import { dimmer } from "../../config/colors";
import { trainingActions } from "../../actions/index";
import { NavigationEvents, withNavigation } from "react-navigation";
import { loadingActions } from "../../actions/loadingActions";
import { evalService } from "../../services/evalService";

const JurySearchScreen = ({ trainings, user, navigation }) => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();

  const [selectedTraining, setselectedTraining] = useState([]);

  const handleCode = (code, setScanned) => {
    console.log("code is" + code)

    if(code){
      dispatch(loadingActions.startLoading())
      var selection = trainings.filter((training) => {
        var Sgroup = undefined;
        training.groups.forEach((group) => {
          if (group.code === code) {
            console.log(group);
            Sgroup = group;
          }
        });
        return Sgroup !== undefined;
      });
      if (Array.isArray(selection) && selection.length) {
        console.log("got into this if");
        var selectgroup = selection[0].groups.filter((group) => {
          return group.code === code;
        });

        selectgroup = selectgroup[0]
        dispatch(loadingActions.stopLoading());
        if (!selectgroup.evaluated) {
          console.log("SELECTED GROUP IS : "+selectgroup)
          dispatch(loadingActions.startLoading());
          dispatch(trainingActions.selectGroupJury(selectgroup));
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
                  navigation.goBack();
                },
                style: "cancel",
              },
              {
                text: "Yes",
                onPress: () => {
                  dispatch(loadingActions.startLoading());
                  dispatch(trainingActions.selectGroupJury(selectgroup));
                  console.log("OK Pressed");
                  evalService
                    .deleteAssessmentJury({
                      gbtId: selectgroup.gbtId,
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
      }  else {
        dispatch(loadingActions.stopLoading());
        console.log("stopped loading")
        setScanned(false);        
      }      
    } else {
      dispatch(loadingActions.stopLoading());
      console.log("stopped loading")
      setScanned(false);       
    } 
  }

  return (
    <ThemeComponent>
      <SafeAreaView style={[{ flex: 1 }, dimmer.dimmer]}>
        <NavigationEvents
          onWillFocus={(payload) => {
            console.log("will focus");
            dispatch(trainingActions.getTrainingsJury(user.id)).then(
              () => {
                dispatch(loadingActions.stopLoading());
              },
              () => {
                dispatch(loadingActions.stopLoading());
              }
            );
          }}
          onDidFocus={(payload) => {}}
          onWillBlur={(payload) => {}}
          onDidBlur={(payload) => {}}
        />
        <SearchBar

          qrpressed={() => {
            navigation.navigate("QRScanner", { handleCode: handleCode });
          }}

          term={term}
          onTermChange={(newTerm) => {
            setTerm(newTerm);
            var selection = trainings.filter((training) => {
              var Sgroup = undefined;
              training.groups.forEach((group) => {
                if (group.code === newTerm) {
                  console.log(group);
                  Sgroup = group;
                }
              });
              return Sgroup !== undefined;
            });
            if (Array.isArray(selection) && selection.length) {
              var selectgroup = selection[0].groups.filter((group) => {
                return group.code === newTerm;
              });
              var clone = JSON.parse(JSON.stringify(selection));
              clone[0].groups = selectgroup;
              setselectedTraining(clone);
            } else {
              setselectedTraining([]);
            }
          }}
          onTermSubmit={() => {
            // useResults.searchApi('everything');
          }}
        />
        <Text style={{ color: colors.WHITE }}>
          We have found {trainings.length ? trainings.length : 0} trainings.
        </Text>

        {Array.isArray(selectedTraining) && selectedTraining.length ? (
          <FlatList
            data={selectedTraining}
            keyExtractor={(training) => training.id}
            renderItem={({ item }) => {
              return <List training={item} role={user.role} />;
            }}
          />
        ) : (
          <FlatList
            data={trainings}
            keyExtractor={(training) => training.id}
            renderItem={({ item }) => {
              console.log(item);
              return <List training={item} role={user.role} />;
            }}
          />
        )}
      </SafeAreaView>
    </ThemeComponent>
  );
};

const styles = StyleSheet.create({});

const mapStateToProps = (state) => {
  const { trainings } = state.trainingsJury;
  const { user } = state.authentication;
  return { trainings, user };
};

export default withNavigation(connect(mapStateToProps)(JurySearchScreen));
