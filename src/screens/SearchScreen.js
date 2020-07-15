import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import { FlatList } from "react-native-gesture-handler";
import { connect, useDispatch } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";
import ThemeComponent from "../components/ThemeComponent";
import List from "../components/toggleList/ListComponent";
import colors from "../config/colors";
import {dimmer} from "../config/colors"
import { trainingActions } from "../actions/index";

const SearchScreen = ({ trainings, user }) => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(trainingActions.getTrainings(user.id));
  }, []);

  return (
    <ThemeComponent>
      <SafeAreaView style={[{ flex: 1 }, dimmer.dimmer]}>
        <SearchBar
          term={term}
          onTermChange={(newTerm) => setTerm(newTerm)}
          onTermSubmit={() => {
            // useResults.searchApi('everything');
          }}
        />
        <Text style={{color:colors.WHITE}}>
          We have found {trainings.length ? trainings.length : 0} trainings.
        </Text>
        <FlatList
          data={trainings}
          keyExtractor={(training) => training.training.id}
          renderItem={({ item }) => {
            return <List training={item} />;
          }}
        />
      </SafeAreaView>
    </ThemeComponent>
  );
};

const styles = StyleSheet.create({});

const mapStateToProps = (state) => {
  console.log("yo");
  const { trainings } = state.trainings;
  const { user } = state.authentication;
  return { trainings, user};
};

export default connect(mapStateToProps)(SearchScreen);
