import React, { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import Button from "../components/ButtonComponent";
import FormTextInput from "../components/FormTextInputComponent";
import imageLogo from "../../assets/logo.png";
import colors from "../config/colors";
import strings from "../config/strings";

const AuthScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  handleLoginPress = () => {
    console.log("Login button pressed");
  };

  return (
    <>
      <View style={styles.container}>
        <Image source={imageLogo} style={styles.logo} />
        <View style={styles.form}>
          <FormTextInput
            term={username}
            onTermChange={(newTerm) => setUsername(newTerm)}
            onTermSubmit={() => {}}
            placeholder="Email"
            pwd={false}
            keyboardType="email-address" 
          />
          <FormTextInput
            term={password}
            onTermChange={(newTerm) => setPassword(newTerm)}
            onTermSubmit={() => {}}
            placeholder="Password"
            pwd={true}
          />
          <Button label="Login" onPress={handleLoginPress} />
        </View>
      </View>
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
