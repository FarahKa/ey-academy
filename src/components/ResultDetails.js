import React from "react";

import { View, Text, Image, StyleSheet } from "react-native";
// NOT IN USE
const ResultDetails = ({ item }) => {
  return (
      <View style={styles.square}>
          <Text style={styles.group}>{item.group}</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  group: {
    fontSize: 25,
    alignSelf: 'center',
  },
  square: {
    width: 100,
    height: 100,
    borderRadius: 4,
    marginBottom: 5,
    backgroundColor: "#A9A9A9",
    //flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 4,
    marginBottom: 5,
  },
  name: {
    fontWeight: "bold",
  },
});

export default ResultDetails;
