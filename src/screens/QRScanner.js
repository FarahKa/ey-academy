import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { withNavigation } from "react-navigation";
//import {Haptic} from 'expo';
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../config/colors";

const QRScanner = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  const back = navigation.getParam("back")

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
    return <Text>No access to camera, please check permissions in settings.</Text>;
  }
  const handleBarCodeScanned = ({ type, data }) => {
    console.log(
      `Bar code with type ${type} and data ${data} has been scanned!`
    );
    if (!data) return null;
    if (!scanned) {
      setScanned(true);
      navigation.navigate(back, {code : data});
    }
  };
  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.DARK_GREY }}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? () => {console.log("already scanned")} : handleBarCodeScanned}
          style={styles.cam}
          barCodeTypes={[
            BarCodeScanner.Constants.BarCodeType.qr,
          ]}
        />
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


export default withNavigation(QRScanner);
