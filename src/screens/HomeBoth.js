import React, { useEffect } from "react";
import {
  withNavigation, NavigationEvents,
} from "react-navigation";
import { View, Dimensions, Text, StyleSheet, BackHandler } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MenuItem from "../components/MenuItemComponent";
import ThemeComponent from "../components/ThemeComponent";
import { dimmer } from "../config/colors";
import colors from "../config/colors";
import { useDispatch, connect } from "react-redux";
import { loadingActions } from "../actions/loadingActions";
import { userActions } from "../actions";

const HomeBoth = ({user}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadingActions.stopLoading());
  }, []);

  return (
    <ThemeComponent>
        <NavigationEvents onWillFocus={() => {
            // var u = {...user, role:"both"}
            // dispatch({ type: "LOGIN_SUCCESS", u })
            dispatch(loadingActions.stopLoading());
        }}/>
      <SafeAreaView style={[{ flex: 1 }, dimmer.dimmer]}>
        <View style={styles.container}>
          <View style={styles.menu}>
            <MenuItem icon="star" title="Marking - Jury" to="SearchJury" user={user} role="jury" />
            <MenuItem icon="user-check" title="Marking - Trainer" to="Search" user={user} role="trainer" />
            <MenuItem />
          </View>
          <View style={styles.menu}>
            <MenuItem icon="clock" title="Jury Schedule" to="PlanningEval" user={user} role="jury" />
            <MenuItem icon="watch" title="Trainer Schedule" to="Planning" user={user} role="trainer" />
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
          <View style={styles.menu}>
            <MenuItem/>
            <MenuItem/>
            <MenuItem/>

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

const mapStateToProps = (state) => {
    const { user } = state.authentication;
    return { user };
  };

export default withNavigation(connect(mapStateToProps)(HomeBoth));