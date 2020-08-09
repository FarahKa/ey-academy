import React, { useState } from "react";
import { FlatList } from "react-native";
import SearchBar from "../../components/SearchBar";
import { connect, useDispatch } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";
import ThemeComponent from "../../components/ThemeComponent";
import { dimmer } from "../../config/colors";
import { peerReviewActions } from "../../actions/index";
import { NavigationEvents } from "react-navigation";
import { loadingActions } from "../../actions/loadingActions";
import ListPR from "../../components/prlist/ListPRComponent";
import ButtonComponent from "../../components/ButtonComponent";

const PeerReviewSearchScreen = ({ trainings, user }) => {
  const [term, setTerm] = useState("");
  const [selectedTraining, setselectedTraining] = useState([]);
  const dispatch = useDispatch();

  return (
    <ThemeComponent>
      <SafeAreaView style={[{ flex: 1 }, dimmer.dimmer]}>
        <NavigationEvents
          onWillFocus={(payload) => {
            console.log("will focus");
            dispatch({ type: "CLEAR_CRITERIA_PR" });
            dispatch(peerReviewActions.getTrainingsPR(user.id)).then(
              () => {
                dispatch(loadingActions.stopLoading());
              },
              () => {
                dispatch(loadingActions.stopLoading());
              }
            );
          }}
        />
        <SearchBar
          term={term}
          onTermChange={(newTerm) => {
            setTerm(newTerm);
            var selection = trainings.filter((training) => {
              var Sgroup = undefined;
              training.groups.forEach((group) => {
                if (group.code === newTerm) {
                  console.log(group)
                  Sgroup = group;
                }
              });
              return Sgroup !== undefined;
            });
            if (Array.isArray(selection) && selection.length) {
              // var selectgroup = selection[0].groups.filter((group) => {
              //   return group.code === newTerm;
              // });
              // selection[0].groups = selectgroup;
              setselectedTraining(selection);
            } else {
              setselectedTraining([]);
            }
          }}
          onTermSubmit={() => {
            // useResults.searchApi('everything');
          }}
        />
        {Array.isArray(selectedTraining) && selectedTraining.length ? (
          <FlatList
            data={selectedTraining}
            keyExtractor={(training) => training.id}
            renderItem={({ item }) => {
              console.log(item)
              return <ListPR training={item} />;
            }}
          />
        ) : (
          <FlatList
            data={trainings}
            keyExtractor={(training) => training.id}
            renderItem={({ item }) => {
              return <ListPR training={item} />;
            }}
          />
        )}
      </SafeAreaView>
    </ThemeComponent>
  );
};

const mapStateToProps = (state) => {
  const { trainings } = state.trainingsPR;
  const { user } = state.authentication;
  return { trainings, user };
};

export default connect(mapStateToProps)(PeerReviewSearchScreen);
