import React, { useRef, useEffect, useState } from "react";
import { View, Text, StyleSheet, Animated, Dimensions, Easing } from "react-native";
import colors from "../config/colors";
import { Feather } from "@expo/vector-icons";

const DeviceWidth = Dimensions.get("window").width;

const Alert = ({ message, state }) => {
    const [color, setcolor] = useState(colors.DARK_GREY)
    const [icon, seticon] = useState("info")
    
    const xPosition = useRef(new Animated.Value(DeviceWidth)).current  // Initial value for opacity: 0
    
    React.useEffect(() => {
        switch(state){
            case "success":
                setcolor(colors.GREEN); seticon("check-circle"); 
                break;
            case "failure":
                setcolor(colors.TORCH_RED); seticon("x-circle"); 
                break;
        }
        Animated.timing(xPosition, {
            toValue: 0,
            easing: Easing.back(),
            duration: 20000,
            useNativeDriver: true,
          }).start();
    }, [xPosition, icon, color, message])

  return (
    <Animated.View style={[styles.container, {backgroundColor:color}]}>
        <Feather name={icon} style={styles.iconStyle} />
        <Text style={styles.text}>{message}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    height:75,
    width: DeviceWidth,
    flexDirection: "row",
    alignContent:"space-around",
    alignItems:"center",
    
  },
  text: {
    alignSelf: "center",
    margin:10,
    color: colors.MISCHKA,
  },
  iconStyle: {
    margin:10,
    fontSize: 40,
    alignSelf: "center",
    color: colors.MISCHKA,
  },
});

export default Alert;
