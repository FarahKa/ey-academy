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
import { withNavigation } from "react-navigation";
import imageLogo from "../../assets/white-logo.png";

const DeviceWidth = Dimensions.get("window").width;

const LogoMenuItem = ({ title, icon, navigation }) => {
  return (
    <View style={styles.square}>
      <Image source={imageLogo} style={styles.iconStyle} />
      <Text style={styles.text}> ACADEMY</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  square: {
    width: DeviceWidth * 0.33,
    height: DeviceWidth * 0.33,
    justifyContent: "center",
    // marginBottom: 5,
    // marginLeft: 5,
    // backgroundColor: colors.DIMMER,
  },
  text: {
    fontSize: 10,
    alignSelf: "center",
    color: colors.MISCHKA,
  },
  iconStyle: {
    height: 80,
    resizeMode: "contain",
    alignSelf: "center",
  },
});


export default withNavigation(LogoMenuItem);
