import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";



import { Provider } from "react-redux";

import configureStore from "./store/configureStore";
import AuthScreen from "./src/screens/AuthScreen";


import CodeScreen from "./src/screens/Consultant/CodeScreen";
import CheckinScreen from "./src/screens/Consultant/CheckinScreen";
import HomeScreen from "./src/screens/Consultant/HomeScreen";

import SearchScreen from "./src/screens/Trainer/SearchScreen";
import GroupScreen from "./src/screens/Trainer/GroupScreen";
import TrainerHomeScreen from "./src/screens/Trainer/TrainerHomeScreen";
import EvalScreen from "./src/screens/Trainer/EvalScreen";


import JuryHomeScreen from "./src/screens/Jury/JuryHomeScreen";
import GroupJuryScreen from "./src/screens/Jury/GroupJuryScreen";
import JurySearchScreen from "./src/screens/Jury/JurySearchScreen";
import EvalScreenJury from "./src/screens/Jury/EvalScreenJury";
import PeerReviewSearchScreen from "./src/screens/Consultant/PeerReviewSearchScreen";
import PeerReviewScreen from "./src/screens/Consultant/PeerReviewScreen";
import QRScanner from "./src/screens/QRScanner";
import FeedbackSearchScreen from "./src/screens/Consultant/FeedbackSearchScreen";

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
    EvalJury:EvalScreenJury,
    PeerReviewSearch : PeerReviewSearchScreen,
    PeerReview : PeerReviewScreen,

    QRScanner: QRScanner,

    FeedbackSearch: FeedbackSearchScreen,

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
