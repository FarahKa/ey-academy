import React, { useEffect, useState } from "react";
import { images } from "../../api/ey-academy";
import { View, Text, Image, StyleSheet } from "react-native";
import colors from "../config/colors";

const MemberCard = ({ item }) => {
  const [image, setImage] = useState("https://i.ytimg.com/vi/xRZB5KBLdOA/maxresdefault.jpg");

  const imageService = () => {
    images.get("/?inc=picture").then(
      (response) => {
        setImage(response.data.results[0].picture.medium);
      },
      (error) => setImage("../../assets/placeholder.jpg")
    );
  };

  useEffect(() => {
    imageService();
    console.log(image);
  }, []);
  const imageB = require("../../assets/placeholder.jpg");
  return (
    <View style={styles.container}>
      <View style={styles.memberCard}>
        <Image style={styles.image} source={{ uri: image }} />
        <Text style={styles.name}>
          {item.displayName} {`\n`}
          Email: {item.email} {`\n`}
          Number: {item.phoneNumber ? item.phoneNumber : "not provided"}
        </Text>
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
    marginLeft: 5,
    backgroundColor: colors.DIMMER,
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 60,
    margin: 20,
  },
  name: {
    // fontWeight: "bold",
    color: colors.MISCHKA,
  },
});

export default MemberCard;
