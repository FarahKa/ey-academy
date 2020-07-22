import React, { useState, useEffect } from "react";
import {
  Image,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  StatusBar,
  ScrollView,
  AsyncStorage,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
//import {} from "react-native-gesture-handler";
import { dimmer } from "../config/colors";
import { useDispatch, useSelector, connect } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";
import { withNavigation } from "react-navigation";
import ThemeComponent from "../components/ThemeComponent";
import { evalActions } from "../actions/evalTrainerActions";
import Theme from "../components/form/ThemeComponent";
import colors from "../config/colors";
import Dark from "../components/DarkComponent";
import FormTextInput from "../components/FormTextInputComponent";
import { evalTrainerService } from "../services/evalTrainerService";
import { trainingActions } from "../actions";
import { loadingActions } from "../actions/loadingActions";
import CardComponent from "./toggleList/CardComponent";

const Remarkable = ({remarkable, setRemarkable, item}) => {
  const [status, setStatus] = useState(false);

  useEffect(() => {
    if (remarkable === item.displayName) {
      setStatus(true);
    } else {
        setStatus(false);
    }
    console.log(remarkable)
  }, [remarkable]);

  return (
    <TouchableOpacity
      onPress={() => {
        setRemarkable(item.displayName);
      }}
    >
      <CardComponent title={item.displayName} status={status} />
    </TouchableOpacity>
  );
};

export default Remarkable;
