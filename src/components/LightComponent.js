import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import colors from "../config/colors";

const Light= ({ children }) => {
  return (
    <View style={styles.card}>
        {children}
    </View>
  );
};

const styles = StyleSheet.create({
    card: {
      padding:8,
        backgroundColor: colors.MISCHKA,
        //flex: 1,
        marginHorizontal: 15,
        marginVertical: 10,
      },
});


export default Light;
