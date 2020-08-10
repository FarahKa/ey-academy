import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import { useDispatch, connect } from "react-redux";
import { attendanceActions } from "../../actions/index";
import { withNavigation } from "react-navigation";
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonComponent from "../../components/ButtonComponent";
import colors, { dimmer } from "../../config/colors";
import FormTextInput from "../../components/FormTextInputComponent";
import ThemeComponent from "../../components/ThemeComponent";
import Dark from "../../components/DarkComponent";

import { loadingActions } from "../../actions/loadingActions";
import Alert from "../../components/AlertComponent";

const DeviceWidth = Dimensions.get("window").width;

const CheckinScreen = ({ user, codeAttending, attending, navigation }) => {
  const [code, setCode] = useState("");
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const [state, setState] = useState("");

  useEffect(() => {
    dispatch(loadingActions.stopLoading());
  }, []);

  function goToCode() {
    navigation.navigate("Code");
  }
  function submitCode() {
    if (!code) return null;
    dispatch(attendanceActions.markAttendance(parseInt(code), user.id)).then(
      () => {
        console.log(
          "ATTENDANCE LOGGED WITH CODE " +
            codeAttending +
            " and attending= " +
            attending
        );
        navigation.navigate("Checkin");
        setState("");
        setMessage("Check in performed successfully!");
        setState("success");
      },
      (error) => {
        setState("");
        if(typeof error.response.data.errors === 'string'){
          setMessage(error.response.data.errors + " !")
        }
        else {
          setMessage("Problem. Please repeat!");
        }

        setState("failure");
      }
    );
  }
  return (
    <ThemeComponent>
      {state !== "" && message !== "" ? (
        <Alert state={state} message={message} />
      ) : null}
      <SafeAreaView style={[{ flex: 1 }, , dimmer.dimmer]}>
        <Dark>
          <Text style={styles.centerText}>
            {user ? `Hello ${user.displayName}. \n` : null}To check in, either
            enter the code manually or scan the QR Code.
          </Text>
        </Dark>
        <View style={{ marginHorizontal: 15 }}>
          <View style={{ marginHorizontal: DeviceWidth * 0.3 }}>
            <FormTextInput
              term={code}
              onTermChange={setCode}
              onTermSubmit={submitCode}
              placeholder={"Code here"}
              additionalStyle={{ textAlign: "center" }}
            />
          </View>
          <Text style={styles.centerText}>OR:</Text>
          <ButtonComponent label={"Scan a QRCode"} onPress={goToCode} />
        </View>
      </SafeAreaView>
    </ThemeComponent>
  );
};

const styles = StyleSheet.create({
  cam: {
    flex: 1,
  },
  centerText: {
    alignSelf: "center",
    fontSize: 16,
    padding: 10,
    color: colors.WHITE,
  },
  textBold: {
    fontWeight: "500",
    color: "#000",
  },
  buttonText: {
    fontSize: 18,
    color: "rgb(0,122,255)",
  },
  buttonTouchable: {
    padding: 13,
    alignItems: "center",
  },
});

const mapStateToProps = (state) => {
  const { user } = state.authentication;
  const { code: codeAttending, attending } = state.attendance;
  return { user, codeAttending, attending };
};

export default withNavigation(connect(mapStateToProps)(CheckinScreen));
