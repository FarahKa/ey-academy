import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { connect, useDispatch } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";
import ThemeComponent from "../components/ThemeComponent";
import colors from "../config/colors";
import { dimmer } from "../config/colors";
import { NavigationEvents } from "react-navigation";
import { loadingActions } from "../actions/loadingActions";
import { trainingService } from "../services/trainingsService";
import SearchBarSimple from "../components/SearchBarSimple";
import ListDocs from "../components/ListDocs";


const DocumentScreen = ({ user }) => {
  const [term, setTerm] = useState("");
  const [selectedTraining, setselectedTraining] = useState([]);
  const [trainings, setTrainings] = useState([]);
   const dispatch = useDispatch();


  return (
    <ThemeComponent>
      <SafeAreaView style={[{ flex: 1 }, dimmer.dimmer]}>
        <NavigationEvents
          onWillFocus={(payload) => {
            console.log("will focus");
            trainingService.getDocuments(user.id).then(
              (documents) => {
                setTrainings(documents)
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
        <SearchBarSimple
          term={term}
          onTermChange={(newTerm) => {
            setTerm(newTerm);
            var selection = trainings.filter((training) => {
              var nameT = training.trainingName.slice(0, newTerm.length).toLowerCase() === newTerm.toLowerCase();
              return nameT;
            });
            if (Array.isArray(selection) && selection.length) {
              setselectedTraining(selection);
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
              return <ListDocs training={item} />;
            }}
          />
        ) : (
          <FlatList
            data={trainings}
            keyExtractor={(training) => training.id}
            renderItem={({ item }) => {
              return <ListDocs training={item} />;
            }}
          />
        )}
      </SafeAreaView>
    </ThemeComponent>
  );
};

const styles = StyleSheet.create({});

const mapStateToProps = (state) => {
  const { user } = state.authentication;
  return { user };
};

export default connect(mapStateToProps)(DocumentScreen);
