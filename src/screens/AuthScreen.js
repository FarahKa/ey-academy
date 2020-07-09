import React, { useState, useEffect } from "react";
import {
  Image,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  StatusBar,
  AsyncStorage,
  ImageBackground,
} from "react-native";
import { useDispatch, useSelector, connect } from "react-redux";
import Button from "../components/ButtonComponent";
import FormTextInput from "../components/FormTextInputComponent";
import imageLogo from "../../assets/white-logo.png";
import background from "../../assets/buildings.jpg";
import colors from "../config/colors";
import { userActions } from "../actions/index";
import { withNavigation } from "react-navigation";

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
    AsyncStorage.getItem("user").then((user) => {
      /*console.log(user)*/
    });
    navigation.navigate("Code");
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={background}
        //imageStyle={{ resizeMode: "stretch" }}
        style={styles.image}
      >
        <KeyboardAvoidingView style={styles.contenu}>
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
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  contenu: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  container: {
    flex: 1,
    flexDirection: "column"
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
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
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
