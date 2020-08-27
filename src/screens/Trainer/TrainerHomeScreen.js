import React, { useEffect } from "react";
import { withNavigation, NavigationEvents } from "react-navigation";
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MenuItem from "../../components/MenuItemComponent";
import ThemeComponent from "../../components/ThemeComponent";
import { dimmer } from "../../config/colors";
import colors from "../../config/colors";
import { useDispatch } from "react-redux";
import { loadingActions } from "../../actions/loadingActions";
import { userActions } from "../../actions";

// const DeviceWidth = Dimensions.get("window").width;
const TrainerHomeScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadingActions.stopLoading());
  }, []);

  return (
    <ThemeComponent>
      <NavigationEvents
        onWillFocus={() => {
          dispatch(loadingActions.stopLoading());
        }}
      />
      <SafeAreaView style={[{ flex: 1 }, dimmer.dimmer]}>
        <View style={styles.container}>
          <View style={styles.menu}>
            <MenuItem />
            <MenuItem icon="star" title="Marking" to="Search" />
            <MenuItem />
          </View>
          <View style={styles.menu}>
            <MenuItem />
            <MenuItem icon="clock" title="Schedule" to="Planning" />
            {/* <LogoMenuItem /> */}
            <MenuItem />
          </View>
          <View style={styles.menu}>
            <MenuItem />
            <MenuItem
              icon="log-out"
              title="Log Out"
              to="Auth"
              before={() => {
                console.log("logging out");
                dispatch(userActions.logout());
              }}
            />
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

export default TrainerHomeScreen;
