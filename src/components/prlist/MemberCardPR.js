import React, { useEffect, useState } from "react";
import { images } from "../../../api/ey-academy";
import { View, Text, Image, StyleSheet } from "react-native";
import colors from "../../config/colors";
import { Feather } from "@expo/vector-icons";
import { imageService } from "../../services/imageService";

const MemberCardPR = ({ item }) => {
  const [image, setImage] = useState("../../assets/placeholder.jpg");


  useEffect(() => {
    imageService.getProfilePicture(item.id).then(
      (response) => {
        setImage(`data:image/${response.fileType.replace(".", "")};base64,${response.dataFiles}`);
      },
      (error) => setImage("../../assets/placeholder.jpg")
    );
    console.log(image);
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.memberCard}>
        <Image style={styles.image} source={{ uri: image }} />
        <Text style={styles.name}>
          {item.displayName} {`\n`}
          Email: {item.email} {`\n`}
          Number: {item.phoneNumber ? item.phoneNumber : "not provided"}
        </Text>
        {item.evaluated ? <Feather name="check-circle" style={styles.iconStyle} color={colors.MISCHKA}/> : null}
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
    borderRadius: 25,
    marginVertical: 4,
    marginLeft: 5,
    backgroundColor: colors.S_DIMMER,
    borderColor:"rgb(245, 200, 66)",
    borderWidth: 2,
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
    alignSelf: "center",
    // fontWeight: "bold",
    color: colors.MISCHKA,
  },
  iconStyle: {

    fontSize: 25,
    alignSelf: "flex-end",
    marginHorizontal: 15,
    color: "#FFF",
  },
});

export default MemberCardPR;
