import React, { useState, useEffect } from "react";
import { useDispatch} from "react-redux";
import { View, Dimensions, Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MenuItem from "../../components/MenuItemComponent";
import ThemeComponent from "../../components/ThemeComponent";
import  LogoMenuItem from "../../components/LogoMenuItem";
import {dimmer} from "../../config/colors";
import colors from "../../config/colors";
import { NavigationEvents } from "react-navigation";
import { loadingActions } from "../../actions/loadingActions";



const DeviceWidth = Dimensions.get("window").width;
const HomeScreen = ({ trainings }) => {
  const dispatch = useDispatch();
  const [term, setTerm] = useState("");

  useEffect(() => {
    dispatch(loadingActions.stopLoading());
  }, [])
  //, dimmer.dimmer
  return (

    <ThemeComponent>
      <SafeAreaView style={[{ flex: 1 }, , dimmer.dimmer]}>
        <View style={styles.container}>
          <View style={styles.menu}>
            <MenuItem icon="user-check" title="Check In" to="Checkin" />
            <MenuItem icon="star" title="My Marks" to="" />
            <MenuItem icon="message-square" title="Peer Review" to="PeerReviewSearch" />
          </View>
          <View style={styles.menu}>
            <MenuItem icon="clock" title="Schedule" to="" />
            <LogoMenuItem />
            <MenuItem icon="settings" title="Settings" to=""/>
          </View>
          <View style={styles.menu}>
            <MenuItem icon="users" title="My Groups" to="" />
            <MenuItem icon="smile" title="Feedback" to="" />
            <MenuItem icon="log-out" title="Log Out" to="Auth" />
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
  }
});


export default HomeScreen;
