import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import { FlatList } from "react-native-gesture-handler";
import { connect } from "react-redux";
import ResultsList from "../components/ResultsList";
import { SafeAreaView } from "react-native-safe-area-context";
import ThemeComponent from "../components/ThemeComponent";

const SearchScreen = ({ trainings }) => {
  const [term, setTerm] = useState("");
  return (
    <ThemeComponent>
      <SafeAreaView style={{ flex: 1 }}>
        <SearchBar
          term={term}
          onTermChange={(newTerm) => setTerm(newTerm)}
          onTermSubmit={() => {
            // useResults.searchApi('everything');
          }}
        />
        <Text>
          We have found {trainings.length ? trainings.length : 0} trainings.
        </Text>
        <FlatList
          data={trainings}
          keyExtractor={(training) => training.title}
          renderItem={({ item }) => {
            return <ResultsList training={item} />;
          }}
        />
      </SafeAreaView>
    </ThemeComponent>
  );
};

const styles = StyleSheet.create({});

const mapStateToProps = (state) => {
  console.log("yo");
  const { trainings } = state;
  return { trainings: trainings.trainings };
};

export default connect(mapStateToProps)(SearchScreen);
