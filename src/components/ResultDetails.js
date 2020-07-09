import React from "react";

import { View, Text, Image, StyleSheet } from "react-native";

const ResultDetails = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.square}>
        <View style={{ width: 150 }}>
          <Text style={styles.group}>{item.group}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  group: {
    fontSize: 30,
    alignSelf: 'center',
  },
  square: {
    width: 100,
    height: 100,
    borderRadius: 4,
    marginBottom: 5,
    backgroundColor: "#A9A9A9",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    marginLeft: 15,
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
