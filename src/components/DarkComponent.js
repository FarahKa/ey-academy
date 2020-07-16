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

const Dark= ({ children }) => {
  return (
    <View style={styles.card}>
        {children}
    </View>
  );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: "rgba(0,0,0,0.6)",
        //flex: 1,
        padding:8,
        marginHorizontal: 15,
        marginVertical: 10,
      },
});


export default Dark;
