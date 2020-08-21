import React, { useState } from "react";
import { FlatList, Alert } from "react-native";
import SearchBar from "../../components/SearchBar";
import { connect, useDispatch } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";
import ThemeComponent from "../../components/ThemeComponent";
import { dimmer } from "../../config/colors";
import { feedbackActions } from "../../actions/feedbackActions";
import { NavigationEvents, withNavigation } from "react-navigation";
import { loadingActions } from "../../actions/loadingActions";
import ListF from "../../components/flist/ListFComponent";
import ButtonComponent from "../../components/ButtonComponent";
import { evalService } from "../../services/evalService";

const FeedbackSearchScreen = ({ trainings, user, navigation }) => {
  const [term, setTerm] = useState("");
  const [selectedTraining, setselectedTraining] = useState([]);
  const dispatch = useDispatch();

  const handleCode = (code, setScanned) => {
    console.log("code is" + code);

    if (code) {
      dispatch(loadingActions.startLoading());
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
        // console.log("got into this if");
        // var selectgroup = selection[0].groups.filter((group) => {
        //   return group.code === code;
        // });

        // selectgroup = selectgroup[0];
        dispatch(loadingActions.stopLoading());
        if (!selection.evaluated) {
          console.log("SELECTED training is:" + selection);
          dispatch(loadingActions.startLoading());
          dispatch(feedbackActions.selectGroupF(selection));
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
                  navigation.goBack();
                },
                style: "cancel",
              },
              {
                text: "Yes",
                onPress: () => {
                  dispatch(loadingActions.startLoading());
                  dispatch(feedbackActions.selectGroupF(selection));
                  console.log("OK Pressed");
                  evalService
                    .deleteFeedback({
                      TrainingId: selection.id,
                      UserId: user.id,
                    })
                    .then(
                      () => {
                        navigation.navigate("Feedback");
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
      } else {
        dispatch(loadingActions.stopLoading());
        console.log("stopped loading");
        setScanned(false);
      }
    } else {
      dispatch(loadingActions.stopLoading());
      console.log("stopped loading");
      setScanned(false);
    }
  };

  return (
    <ThemeComponent>
      <SafeAreaView style={[{ flex: 1 }, dimmer.dimmer]}>
        <NavigationEvents
          onWillFocus={(payload) => {
            console.log("will focus");
            dispatch({ type: "CLEAR_CRITERIA_F" });
            dispatch(feedbackActions.getTrainingsF(user.id)).then(
              (trainings) => {
                console.log(trainings);
                dispatch(loadingActions.stopLoading());
              },
              () => {
                dispatch(loadingActions.stopLoading());
              }
            );
          }}
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
              setselectedTraining(selection);
            } else {
              setselectedTraining([]);
            }
          }}
          onTermSubmit={() => {
          }}
        />
        {Array.isArray(selectedTraining) && selectedTraining.length ? (
          <FlatList
            data={selectedTraining}
            keyExtractor={(training) => training.id}
            renderItem={({ item }) => {
              console.log(item);
              return <ListF training={item} />;
            }}
          />
        ) : (
          <FlatList
            data={trainings}
            keyExtractor={(training) => training.id}
            renderItem={({ item }) => {
              return <ListF training={item} />;
            }}
          />
        )}
      </SafeAreaView>
    </ThemeComponent>
  );
};

const mapStateToProps = (state) => {
  const { trainings } = state.trainingsF;
  const { user } = state.authentication;
  return { trainings, user };
};

export default withNavigation(connect(mapStateToProps)(FeedbackSearchScreen));
