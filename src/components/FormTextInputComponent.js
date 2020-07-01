import React from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";
import colors from "../config/colors";

// We support all the TextInput props


const FormTextInput = ({ term, onTermChange, onTermSubmit, placeholder, pwd, ...otherProps }) =>  {

    return (
      <TextInput
      secureTextEntry={pwd}
      password={pwd} 
      autoCapitalize="none"
      autoCorrect={false}
      placeholder={placeholder}
      value={term}
      onChangeText={(newTerm) => onTermChange(newTerm)}
      style={styles.inputStyle}
      onEndEditing={() => {
          onTermSubmit()
      }}
        style={styles.textInput}
        {...otherProps}
      />
    );
  
}

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderColor: colors.SILVER,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 20
  }
});

export default FormTextInput;