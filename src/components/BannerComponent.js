import React from "react";
import { View, StyleSheet, Text } from "react-native";
import colors from "../config/colors";

export const BannerComponent = ({ title, children }) => {
  return (
    <View>
      <View style={styles.background}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style= {styles.card}>
          {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    marginTop: 5,
    //marginBottom: 5,
    backgroundColor: colors.MISCHKA,
    height: 50,
    //borderRadius: 3,
    marginHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  card: {
    backgroundColor: "rgba(0,0,0,0.7)",
    height: 200,
    marginHorizontal: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    //marginBottom: 5,
    textTransform: "uppercase",
    color: colors.DARK_GREY,
  },
  inputStyle: {
    flex: 1,
    fontSize: 15,
  },
  iconStyle: {
    fontSize: 40,
    alignSelf: "center",
    marginHorizontal: 15,
  },
});
