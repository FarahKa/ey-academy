import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';


const LittleButton = ({ color, textColor, label, onPress }) => {
    return (
      <TouchableOpacity
        style={[styles.container, { backgroundColor: color }]}
        onPress={onPress}
      >
        <Text style={{color : textColor}}>{label}</Text>
      </TouchableOpacity>
    );
  };


  const styles = StyleSheet.create({
    container: {
      width: "40%",
      alignItems: "center",
      justifyContent: "center",
      margin: 5,
      paddingVertical: 12,
      borderRadius: 4,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: "rgba(255,255,255,0.7)",
    },
})

  export default LittleButton;