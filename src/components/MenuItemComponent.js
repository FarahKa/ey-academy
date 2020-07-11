import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import colors from "../config/colors";
import { withNavigation } from "react-navigation";

import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const DeviceWidth = Dimensions.get("window").width;

const MenuItem = ({ title, icon, navigation, to }) => {

  return (
    <TouchableOpacity
    onPress={() => {
      navigation.navigate(to)
    }}>
      <View style={styles.square}>
        <Feather name={icon} style={styles.iconStyle} />
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  square: {
    width: DeviceWidth * 0.33,
    height: DeviceWidth * 0.33,
    justifyContent: "center",
    // marginBottom: 5,
    // marginLeft: 5,
    // backgroundColor: colors.DIMMER,
  },
  text: {
    alignSelf: "center",
    color: colors.MISCHKA,
  },
  iconStyle: {
    fontSize: 40,
    alignSelf: "center",
    color: colors.MISCHKA,
  },
});

export default withNavigation(MenuItem);
