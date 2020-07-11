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
        backgroundColor: colors.MISCHKA,
        //flex: 1,
        marginHorizontal: 15,
        marginVertical: 10,
      },
});


export default Dark;
