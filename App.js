import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import SearchScreen from "./src/screens/SearchScreen";
import GroupScreen from "./src/screens/GroupScreen";

import { Provider } from "react-redux";

import configureStore from "./store/configureStore";
import AuthScreen from "./src/screens/AuthScreen";
import CodeScreen from "./src/screens/CodeScreen";
import { StyleSheet, ImageBackground } from "react-native";

import ThemeComponent from "./src/components/ThemeComponent";
import CheckinScreen from "./src/screens/CheckinScreen";
import HomeScreen from "./src/screens/HomeScreen";
import TrainerHomeScreen from "./src/screens/TrainerHomeScreen";
import EvalScreen from "./src/screens/EvalScreen";
import JuryHomeScreen from "./src/screens/JuryHomeScreen";
import GroupJuryScreen from "./src/screens/GroupJuryScreen";
import JurySearchScreen from "./src/screens/JurySearchScreen";

const store = configureStore();

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    Group: GroupScreen,
    Auth: AuthScreen,
    Code: CodeScreen,
    Checkin:CheckinScreen,
    Home:HomeScreen,
    HomeTrainer:TrainerHomeScreen,
    Eval: EvalScreen,
    HomeJury: JuryHomeScreen,
    SearchJury: JurySearchScreen,
    GroupJury: GroupJuryScreen,

  },
  {
    initialRouteName: "Auth",
    headerMode: "none",
    // defaultNavigationOptions: {
    //   title: "Login"
    // }
  }
);

const AppContainer = createAppContainer(navigator);

const App = () => {
  return (

      <Provider store={store}>
        <AppContainer />
      </Provider>

  );
};

export default App;
