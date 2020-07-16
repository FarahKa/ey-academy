import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../../config/colors";

const Criterion = ({ criterion }) => {
  return (
    <View>
      <Text>{criterion.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
});

export default Criterion;
