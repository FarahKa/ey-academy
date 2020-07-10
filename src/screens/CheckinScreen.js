import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, StyleSheet, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useDispatch, connect } from "react-redux";
import { attendanceActions } from "../actions/index";
import { withNavigation } from "react-navigation";
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonComponent from "../components/ButtonComponent";
import colors from "../config/colors";
import FormTextInput from "../components/FormTextInputComponent";
import ThemeComponent from "../components/ThemeComponent";

const CheckinScreen = ({user, codeAttending, attending, navigation}) => {
    const [code, setCode] = useState("");
    const dispatch = useDispatch();
    const [error, setError] = useState("");
    function goToCode () {
        navigation.navigate("Code");
    }
    function submitCode() {
        if(!code) return null;
        dispatch(attendanceActions.markAttendance(parseInt(code), user.id));
        if(code === codeAttending && attending){
          navigation.navigate("Search");
        } else {
          console.log("bad response");
          setError("Problem. Please repeat!")     
        }
    }
  return (
    <ThemeComponent>
      <SafeAreaView  style={{ flex: 1 }}>
        <Text style={styles.centerText}>
          {user ? `Hello ${user.displayName} \n` : null}
        </Text>
        <ButtonComponent label={"Scan a QRCode"} onPress={goToCode}/>       
        <Text style={styles.centerText}>
          OR enter code manually:
        </Text>
        <FormTextInput term={code} onTermChange={setCode} onTermSubmit={submitCode} placeholder= {"Code here"}/>
      </SafeAreaView>
      </ThemeComponent>

  );
};

const styles = StyleSheet.create({
  cam: {
    flex : 1,
  },
  centerText: {
    alignSelf:"center",
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
    alignItems: 'center',
  },
});

const mapStateToProps = (state) => {
  console.log(state.authentification + " "+ state.attending);
  const { user } = state.authentication;
  const {code : codeAttending, attending} = state.attendance;
  return {user, codeAttending, attending};
};

export default withNavigation(connect(mapStateToProps)(CheckinScreen));
