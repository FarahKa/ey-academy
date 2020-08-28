import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MenuItem from "../../components/MenuItemComponent";
import ThemeComponent from "../../components/ThemeComponent";
import { dimmer } from "../../config/colors";
import colors from "../../config/colors";
import { NavigationEvents } from "react-navigation";
import { loadingActions } from "../../actions/loadingActions";

// const DeviceWidth = Dimensions.get("window").width;
const HomeScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadingActions.stopLoading());
  }, []);
  //, dimmer.dimmer
  return (
    <ThemeComponent>
      <NavigationEvents
        onWillFocus={() => {
          dispatch(loadingActions.stopLoading());
        }}
      />
      <SafeAreaView style={[{ flex: 1 }, , dimmer.dimmer]}>
        <View style={styles.container}>
          <View style={styles.menu}>
            <MenuItem />
            <MenuItem />
            <MenuItem />
          </View>
          <View style={styles.menu}>
            <MenuItem icon="user-check" title="Check In" to="Checkin" />
            <MenuItem
              icon="message-square"
              title="Peer Review"
              to="PeerReviewSearch"
            />
            <MenuItem icon="file" title="Documents" to="Documents" />
          </View>
          <View style={styles.menu}>
            <MenuItem icon="clock" title="Schedule" to="Planning" />
            <MenuItem icon="smile" title="Feedback" to="FeedbackSearch" />
            <MenuItem icon="log-out" title="Log Out" to="Auth" />
          </View>
          <View style={styles.menu}>
            <MenuItem />
            <MenuItem />
            <MenuItem />
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

export default HomeScreen;
