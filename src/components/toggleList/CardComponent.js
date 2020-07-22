import React from "react";
import { View, StyleSheet, Text } from "react-native";
import colors from "../../config/colors";
import { Feather } from "@expo/vector-icons";

const CardComponent = ({ status, title }) => {
  return (
      <View style= {styles.card}>          
        <Text style={styles.title}>{title}</Text>
        {status ? <Feather name="check-circle" style={styles.iconStyle} color={colors.MISCHKA}/> : null}
      </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "rgba(0,0,0,0.5)",
    height: 50,
    marginVertical: 5,
    alignItems:"center",
    paddingHorizontal: 15,
    flexDirection:"row",
    justifyContent:"space-between",
  },
  iconStyle: {

    fontSize: 30,
    alignSelf: "center",
    marginHorizontal: 15,
    color: "#FFF",
  },
  date: {
    fontSize: 15,
    marginLeft: 15,
    //marginBottom: 5,
    color: colors.SILVER,
  },
  title: {
    color: colors.WHITE,
    //fontWeight: "bold",
    fontSize: 15,
  },
  iconStyle: {
    fontSize: 30,
    alignSelf: "center",
    marginHorizontal: 15,
  },
});

export default  CardComponent;
