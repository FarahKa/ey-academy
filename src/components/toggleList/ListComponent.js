import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../../config/colors";
import ResultsList from "./ResultsList";
import { Feather } from "@expo/vector-icons";


const List = ({ training }) => {
  const [toggle, setToggle] = useState(false);
  const [name, setName] = useState("chevron-up");
  

  const toggleStuff = () => {
    if (toggle) {
      setToggle(false);
      setName("chevron-up");
    } else {
      setToggle(true);
      setName("chevron-down");
    }
  };

  return (
    <View>
      <TouchableOpacity style={styles.background} onPress={toggleStuff}>
        <Text style={styles.title}>{training.name}</Text>
        <Feather style={styles.icon} name={name}/>
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
    justifyContent: "space-between",
  },
  card: {
    backgroundColor: "rgba(0,0,0,0.3)",
    flex: 1,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  title: {
    //fontSize: 18,
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
  icon: {
    fontSize:18,
    marginRight:5,
  }
});

export default List;
