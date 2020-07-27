import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Button,
  Vibration,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useDispatch, connect } from "react-redux";
import { attendanceActions } from "../actions/index";
import { withNavigation } from "react-navigation";
//import {Haptic} from 'expo';
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../config/colors";

const CodeScreen = ({ user, codeAttending, attending, navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  const handleBarCodeScanned = ({ type, data }) => {
    setCode(parseInt(data));
    console.log(
      `Bar code with type ${type} and data ${code} has been scanned!`
    );
    if (!code) return null;
    if (!scanned) {
      setScanned(true);
      dispatch(attendanceActions.markAttendance(code, user.id)).then(
        () => {
          console.log(
            "\n \n \n code attending:" +
              codeAttending +
              "\n attending:" +
              attending
          );
          //Vibration.vibrate(100);
          navigation.navigate("Checkin");
          setScanned(false);
        },
        (error) => {
          console.log("ERROR = " + error);
          navigation.navigate("Checkin");
        }
      );
    }
  };

  // const handleNext = () => {

  // }
  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.DARK_GREY }}>
        {/* <Text style={styles.centerText}>
          {user ? `Hello ${user.displayName} \n` : null}
          Scan the <Text style={styles.textBold}>Code</Text> that you see.
        </Text> */}
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={styles.cam}
          barCodeTypes={[
            BarCodeScanner.Constants.BarCodeType.qr,
            BarCodeScanner.Constants.BarCodeType.code128,
          ]}
        />
        {/* {scanned && (
          <Button
            title={`Code is ${code}. Scan again?`}
            onPress={() => setScanned(false)}
          />
        )} */}
        {/* <TouchableOpacity style={styles.buttonTouchable}>
          <Text style={styles.buttonText} onPress={handleNext}>OK. Got it! Next? </Text>
        </TouchableOpacity> */}
      </SafeAreaView>
    </>
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
    color: "#777",
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

export default withNavigation(connect(mapStateToProps)(CodeScreen));
