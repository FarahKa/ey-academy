import React from "react";
import { StyleSheet, ImageBackground, View } from "react-native";
import background from "../../assets/buildings.jpg";
import { SafeAreaView } from "react-native-safe-area-context";

const ThemeComponent = ({children}) => {
  return (
    <View style={styles.container}>
     <ImageBackground
        source={background}
        //imageStyle={{ resizeMode: "stretch" }}
        style={styles.image}
      >
        {children}
      </ImageBackground>    
    </View>

  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
      },
      image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
      },

});


export default ThemeComponent;