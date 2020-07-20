import React, { useState, useEffect } from "react";
import { useFocusEffect } from "react-navigation";
import { View, Dimensions, Text, StyleSheet, BackHandler } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MenuItem from "../components/MenuItemComponent";
import ThemeComponent from "../components/ThemeComponent";
import LogoMenuItem from "../components/LogoMenuItem";
import { dimmer } from "../config/colors";
import colors from "../config/colors";
import { useDispatch } from "react-redux";
import { loadingActions } from "../actions/loadingActions";
import { userActions } from "../actions";

const DeviceWidth = Dimensions.get("window").width;
const TrainerHomeScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadingActions.stopLoading());
  }, []);

  return (
    <ThemeComponent>
      <SafeAreaView style={[{ flex: 1 }, , dimmer.dimmer]}>
        <View style={styles.container}>
          <View style={styles.menu}>
            <MenuItem icon="star" title="Marking" to="Search" />
            <MenuItem icon="clock" title="Schedule" to="" />
            <MenuItem icon="message-square" title="Messaging" to="" />
          </View>
          <View style={styles.menu}>
            <MenuItem icon="user-check" title="CheckIn Codes" to="" />
            <LogoMenuItem />
            <MenuItem icon="settings" title="Settings" to="" />
          </View>
          <View style={styles.menu}>
            <MenuItem icon="users" title="Groups" to="" />
            <MenuItem icon="smile" title="Feedback" to="" />
            <MenuItem
              icon="log-out"
              title="Log Out"
              to="Auth"
              before={() => {
                console.log("logging out");
                dispatch(userActions.logout());
              }}
            />
          </View>
        </View>
      </SafeAreaView>
    </ThemeComponent>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  menu: {
    backgroundColor: colors.DIMMER,
  },
});

export default TrainerHomeScreen;
