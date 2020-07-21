import React from "react";
import { View, TextInput, StyleSheet, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "../config/colors";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  const image = require("../../assets/qr.png");

  return (
    <View style={styles.container}>
          <View style={styles.background}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search"
        value={term}
        onChangeText={(newTerm) => onTermChange(newTerm)}
        style={styles.inputStyle}
        onEndEditing={() => {
            onTermSubmit()
        }}
      />
      <Image style={styles.qricon} source={image}/>
    </View>
    </View>

  );
};

const styles = StyleSheet.create({
  background: {
    marginVertical: 10,
    backgroundColor: "#DCDCDC",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
  },
  inputStyle: {
    flex: 1,
    fontSize: 15,
  },
  iconStyle: {
    fontSize: 30,
    alignSelf: "center",
    marginHorizontal: 10,
    color: colors.DARK_GREY
  },
  qricon: {
    width: 30,
    height: 30,
    alignSelf: "center",
    marginRight: 10
    //resizeMode: "contain"
  },
  container: {
    backgroundColor: colors.DARK_GREY
  }
});

export default SearchBar;
