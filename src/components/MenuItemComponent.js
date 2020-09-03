import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import colors from "../config/colors";
import { withNavigation, StackActions, NavigationActions } from "react-navigation";

import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { loadingActions } from "../actions/loadingActions";
import { useDispatch } from "react-redux";

const DeviceWidth = Dimensions.get("window").width;

const MenuItem = ({ title, icon, navigation, to, before, user, role }) => {
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      onPress={() => {
        if (to) {
          dispatch(loadingActions.startLoading());
          if (before) {
            before();
          }
          if (role) {
            console.log("changing role to " + role);

            var u = { ...user, role: role };
            dispatch({ type: "USERS_LOGIN_SUCCESS", user: u });
          }
          if (to === "Auth") {
            const resetAction = StackActions.reset({
              index: 0,
              actions: [NavigationActions.navigate({ routeName: to })],
            });
            navigation.dispatch(resetAction);
          } else {
            navigation.navigate(to);
          }
        }
      }}
    >
      <View style={styles.square}>
        <Feather name={icon} style={styles.iconStyle} />
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  square: {
    width: DeviceWidth * 0.33,
    height: DeviceWidth * 0.33,
    justifyContent: "center",
    // marginBottom: 5,
    // marginLeft: 5,
    // backgroundColor: colors.DIMMER,
  },
  text: {
    alignSelf: "center",
    color: colors.MISCHKA,
  },
  iconStyle: {
    fontSize: 40,
    alignSelf: "center",
    color: colors.MISCHKA,
  },
});

export default withNavigation(MenuItem);
