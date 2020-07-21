import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../../config/colors";
import ResultsList from "./ResultsList";

const PastCheckins = ({ checkins }) => {
  const [toggle, setToggle] = useState(false);

  const toggleStuff = () => {
    if (toggle) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  };

  return (
    <View>
      <TouchableOpacity style={styles.background} onPress={toggleStuff}>
        <Text style={styles.title}>Previous Check-Ins</Text>
      </TouchableOpacity>
      {toggle ? (
        <View style={styles.card}>
          <FlatList
            data={checkins}
            keyExtractor={(item) => item.date}
            renderItem={({ item }) => {
              return (
                //<ScrollView>
                <View style={styles.card}>
                  <Text style={styles.title}>{title}</Text>

                </View>
                //</ScrollView>
              );
            }}
          />
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
  card2: {
    backgroundColor: "rgba(0,0,0,0.5)",
    height: 50,
    marginVertical: 5,
    alignItems: "center",
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
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
  title: {
    color: colors.WHITE,
    //fontWeight: "bold",
    fontSize: 15,
  },
});

export default PastCheckins;
