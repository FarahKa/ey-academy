import React from "react";

import { View, Text, Image, StyleSheet } from "react-native";

const MemberCard = ({ item }) => {

    const image=require('../../assets/placeholder.jpg');
  return (
    <View style={styles.container}>
      <View style={styles.memberCard}>
          <Image style={styles.image} source={image}/>
          <Text style={styles.name}>{item.id}- {item.name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        marginRight: 10,
      },
      memberCard: {
        height: 100,
        borderRadius: 30,
        marginBottom: 5,
        marginLeft:5,
        backgroundColor: "#A9A9A9",
        justifyContent: "flex-start",
        flexDirection: "row",
        alignItems: "center",
      },
      image: {
        width: 75,
        height: 75,
        borderRadius: 60,
        margin: 20
      },
      name: {
        fontWeight: "bold",
      },
});

export default MemberCard;
