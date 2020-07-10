import React from "react";
import { View, StyleSheet, Text } from "react-native";
import colors from "../config/colors";

const CardComponent = ({ item, title }) => {
  return (
      <View style= {styles.card}>          
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>When the training happened.</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "rgba(0,0,0,0.5)",
    height: 50,
    marginVertical: 5,
    paddingHorizontal: 15,
  },
  date: {
    fontSize: 15,
    marginLeft: 15,
    //marginBottom: 5,
    color: colors.SILVER,
  },
  title: {
    color: colors.WHITE,
    fontWeight: "bold",
    fontSize: 15,
  },
  iconStyle: {
    fontSize: 40,
    alignSelf: "center",
    marginHorizontal: 15,
  },
});

export default  CardComponent;
