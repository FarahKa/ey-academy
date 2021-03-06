import React from "react";
import { StyleSheet, ImageBackground, View, StatusBar } from "react-native";
//import background from "../../assets/buildings.jpeg";
import background from "../../assets/ppl.jpg";
import colors from "../config/colors";
import Loading from './LoadingComponent'

const ThemeComponent = ({ children }) => {
  return (
    <>
      <Loading/>
      <StatusBar color={colors.DARK_GREY}></StatusBar>
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
