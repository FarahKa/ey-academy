import React, { useState, useEffect } from "react";
import { View, Dimensions, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import { FlatList } from "react-native-gesture-handler";
import { connect } from "react-redux";
import ResultsList from "../components/ResultsList";
import { SafeAreaView } from "react-native-safe-area-context";
import MenuItem from "../components/MenuItemComponent";
import ThemeComponent from "../components/ThemeComponent";
import MenuItemComponent from "../components/MenuItemComponent";
import {dimmer} from "../config/colors";
const DeviceWidth = Dimensions.get("window").width;
const HomeScreen = ({ trainings }) => {
  const [term, setTerm] = useState("");
  return (
    <ThemeComponent>
      <SafeAreaView style={[{ flex: 1 }, dimmer.dimmer]}>
        <View style={styles.row}>
          <View>
            <MenuItem />
            <MenuItem />
            <MenuItem />
          </View>
          <View>
            <MenuItem />
            <MenuItem />
            <MenuItem />
          </View>
          <View>
            <MenuItem />
            <MenuItem />
            <MenuItem />
          </View>
        </View>
      </SafeAreaView>
    </ThemeComponent>
  );
};

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

const mapStateToProps = (state) => {
  const { trainings } = state;
  return { trainings: trainings.trainings };
};

export default connect(mapStateToProps)(HomeScreen);
