import React, { useState, useEffect } from "react";
import {
  Image,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  StatusBar,
  AsyncStorage,
} from "react-native";
import { useDispatch, useSelector, connect } from "react-redux";
import Button from "../components/ButtonComponent";
import FormTextInput from "../components/FormTextInputComponent";
import imageLogo from "../../assets/logo.png";
import colors from "../config/colors";
import { userActions } from "../actions/index";
import { withNavigation } from "react-navigation";

const AuthScreen = ({navigation, user}) => {
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
    AsyncStorage.getItem('user').then(user =>{ /*console.log(user)*/ });
    navigation.navigate("Code");

  };

  return (
    
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

const mapStateToProps = (state) => {
  //console.log("yo");
  //console.log(state.authentication);
  const {loggedIn,  user } = state.authentication;
  return {user};
};

export default withNavigation(connect(mapStateToProps)(AuthScreen));

//export default AuthScreen;
