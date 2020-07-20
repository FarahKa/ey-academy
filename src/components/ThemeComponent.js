import React from "react";
import { StyleSheet, ImageBackground, View } from "react-native";
//import background from "../../assets/buildings.jpeg";
import background from "../../assets/ppl.jpg";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../config/colors";
import Loading from './LoadingComponent'

const ThemeComponent = ({ children }) => {
  return (
    <>
      <Loading/>
      <View style={styles.container}>
        <ImageBackground
          source={background}
          //imageStyle={{ resizeMode: "stretch" }}
          style={styles.image}
        >
          {children}
        </ImageBackground>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  dimmer: {
    backgroundColor: colors.DIMMER,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});

export default ThemeComponent;
