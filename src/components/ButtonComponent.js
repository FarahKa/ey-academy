import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../config/colors";


 const ButtonComponent = ({ label, onPress, color, tcolor }) => {
    const [col, setcol] = useState(colors.MISCHKA)
    const [tcol, settcol] = useState(colors.DARK_GREY)

    useEffect(() => {
      if(color){
        setcol(color)
      }
      if(tcolor){
        settcol(tcolor)
      }
    }, [])

    return (
      <TouchableOpacity style={[styles.container, {backgroundColor : col}]} onPress={onPress}>
        <Text style={[styles.text, {color:tcol}]}>{label}</Text>
      </TouchableOpacity>
    );
  
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
    paddingVertical: 12,
    borderRadius: 6,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "rgba(255,255,255,0.7)",
  },
  text: {
    textAlign: "center",
    height: 22,
    fontSize:15,
  }
});

export default ButtonComponent;