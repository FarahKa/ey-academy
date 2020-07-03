import React, { useState, useEffect } from "react";
import { Image, StyleSheet, View, KeyboardAvoidingView, StatusBar } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import Button from "../components/ButtonComponent";
import FormTextInput from "../components/FormTextInputComponent";
import imageLogo from "../../assets/logo.png";
import colors from "../config/colors";
import {userActions} from "../actions/index"
import strings from "../config/strings";

const AuthScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
    const dispatch = useDispatch();

    // // reset login status
    // useEffect(() => { 
    //     dispatch(userActions.logout()); 
    // }, []);

  
  handleLoginPress = () => {
    console.log("Login button pressed");

    setSubmitted(true);
    if (email && password) {
        dispatch(userActions.login(email, password));
  };
}


  return (
    <>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <KeyboardAvoidingView style={styles.container}>
        <Image source={imageLogo} style={styles.logo} />
        <View style={styles.form}>
          <FormTextInput
            term={email}
            onTermChange={(newTerm) => setEmail(newTerm)}
            onTermSubmit={() => {}}
            placeholder="Email"
            keyboardType="email-address"
          />
          <FormTextInput
            term={password}
            onTermChange={(newTerm) => setPassword(newTerm)}
            onTermSubmit={() => {}}
            placeholder="Password"
            password={true}
            secureTextEntry={true}
          />
          <Button label="Login" onPress={handleLoginPress} />
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    flex: 1,
    width: "100%",
    resizeMode: "contain",
    alignSelf: "center",
    marginVertical: 25,
  },
  form: {
    flex: 1,
    justifyContent: "center",
    width: "80%",
  },
});

export default AuthScreen;
