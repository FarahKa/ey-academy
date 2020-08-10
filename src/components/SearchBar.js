import React from "react";
import { View, TextInput, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "../config/colors";

const SearchBar = ({ term, onTermChange, onTermSubmit, qrpressed }) => {
  const image = require("../../assets/qr.png");

  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <View style={styles.search}>
          <Feather name="search" style={styles.iconStyle} />
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Search"
            value={term}
            onChangeText={(newTerm) => onTermChange(newTerm)}
            style={styles.inputStyle}
            onEndEditing={() => {
              onTermSubmit();
            }}
          />
        </View>
        <TouchableOpacity style={styles.qriconback} onPress={qrpressed}>
          <Image style={styles.qricon} source={image} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  search: {
    flexDirection: "row",
    backgroundColor: "#DCDCDC",
    borderRadius: 5,
    width: "80%",
  },
  background: {
    marginVertical: 10,
    height: 50,
    marginHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputStyle: {
    flex: 1,
    fontSize: 15,
  },
  iconStyle: {
    fontSize: 30,
    alignSelf: "center",
    marginHorizontal: 10,
    color: colors.DARK_GREY,
  },
  qricon: {
    width: 30,
    height: 30,
    alignSelf: "center",
    margin: 10,
    //resizeMode: "contain"
  },
  qriconback: {
    alignSelf: "center",
    backgroundColor: colors.MISCHKA,
   // margin: 5,
    borderRadius: 5,
  },
  container: {
    backgroundColor: colors.DARK_GREY,
  },
});

export default SearchBar;
