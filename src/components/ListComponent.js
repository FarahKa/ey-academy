import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../config/colors";
import ResultsList from "./ResultsList";

const List = ({ training, children }) => {
  const [toggle, setToggle] = useState(false);

  const toggleStuff = () => {
    if (toggle) {
      setToggle(false);
      console.log(toggle);
    } else {
      setToggle(true);
      console.log(toggle);
    }
  };

  return (
    <View>
      <TouchableOpacity style={styles.background} onPress={toggleStuff}>
        <Text style={styles.title}>{training.training.trainingName}</Text>
      </TouchableOpacity>
      {toggle ? (
        <View style={styles.card}>
          <ResultsList training={training} />
        </View>
      ) : null}
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
    backgroundColor: "rgba(0,0,0,0.3)",
    flex: 1,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    //marginBottom: 5,
    textTransform: "uppercase",
    color: colors.DARK_GREY,
  },
  iconStyle: {
    fontSize: 40,
    alignSelf: "center",
    marginHorizontal: 15,
  },
});

export default List;
