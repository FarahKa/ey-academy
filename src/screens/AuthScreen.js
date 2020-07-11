import React, { useState, useEffect } from "react";
import {
  Image,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  StatusBar,
  AsyncStorage,
} from "react-native";
import {dimmer} from "../config/colors";
import { useDispatch, useSelector, connect } from "react-redux";
import ButtonComponent from "../components/ButtonComponent";
import FormTextInput from "../components/FormTextInputComponent";
import imageLogo from "../../assets/white-logo.png";
import { userActions } from "../actions/index";
import { withNavigation } from "react-navigation";
import ThemeComponent from "../components/ThemeComponent";

const AuthScreen = ({ navigation, user }) => {
  const image = { uri: "https://reactjs.org/logo-og.png" };

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
    }
    
    navigation.navigate("Home");
  };

  return (
    <ThemeComponent>
      <KeyboardAvoidingView style={[styles.contenu, dimmer.dimmer]}>
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
          <ButtonComponent label="Login" onPress={handleLoginPress} />
        </View>
      </KeyboardAvoidingView>
    </ThemeComponent>
  );
};

const styles = StyleSheet.create({
  contenu: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    //backgroundColor: "rgba(0,0,0,0.5)",

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

const mapStateToProps = (state) => {
  //console.log("yo");
  //console.log(state.authentication);
  const { loggedIn, user } = state.authentication;
  return { user };
};

export default withNavigation(connect(mapStateToProps)(AuthScreen));

//export default AuthScreen;
