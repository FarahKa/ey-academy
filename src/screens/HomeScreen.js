

import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import { FlatList } from "react-native-gesture-handler";
import { connect } from "react-redux";
import ResultsList from "../components/ResultsList";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = ({trainings}) => {
  const [term, setTerm] = useState("");
  return (
    <SafeAreaView style={{flex:1}}>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

const mapStateToProps = (state) => {
  const { trainings } = state;
  return {trainings:trainings.trainings};
};

export default connect(mapStateToProps)(HomeScreen);