import React from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import { connect } from "react-redux";
import colors from "../config/colors";
import { withNavigation } from "react-navigation";

const DeviceWidth = Dimensions.get("window").width;

const MenuItem = ({ title, icon, navigation }) => {
  return <View style={styles.square}></View>;
};

const styles = StyleSheet.create({
  square: {
    width: DeviceWidth * 0.33,
    height: DeviceWidth * 0.33,
    marginBottom: 5,
    marginLeft: 5,
    backgroundColor: colors.DIMMER,
  },
});

const mapStateToProps = (state) => {
  const { trainings } = state;
  return { trainings: trainings.trainings };
};

export default withNavigation(MenuItem);
