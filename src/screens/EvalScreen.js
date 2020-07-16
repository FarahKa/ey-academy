import React, { useState, useEffect } from "react";
import {
  Image,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  StatusBar,
  AsyncStorage,
  //FlatList
} from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import {dimmer} from "../config/colors";
import { useDispatch, useSelector, connect } from "react-redux";
import ButtonComponent from "../components/ButtonComponent";
import { SafeAreaView } from "react-native-safe-area-context";
import { withNavigation } from "react-navigation";
import ThemeComponent from "../components/ThemeComponent";
import { evalActions } from "../actions/evalTrainerActions";
import Theme from "../components/form/ThemeComponent";

const EvalScreen = ({ navigation, form, group }) => {
    
  const [submitted, setSubmitted] = useState(false);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(evalActions.getTemplateTrainer()).then(() => console.log(""));
  }, [])

  function handleSubmitPress () {
      console.log("submit was pressed")
  }

  return (
    <ThemeComponent>
      <SafeAreaView style={[styles.contenu, dimmer.dimmer]}>

       <FlatList
          data={form.themes}
          keyExtractor={(theme) => theme.id}
          renderItem={({ item }) => {
            return <Theme theme={item} />;
          }}
        />
        <View style={styles.form}>
          <ButtonComponent label="Submit" onPress={handleSubmitPress} />
        </View>
      </SafeAreaView>
    </ThemeComponent>
  );
};

const styles = StyleSheet.create({
  contenu: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    //backgroundColor: "rgba(0,0,0,0.5)",

  },
  logo: {
    flex: 1,
    width: "100%",
    resizeMode: "contain",
    alignSelf: "center",
    marginVertical: 25,
  },
  form: {
    flex: 1,
    justifyContent: "center",
    width: "90%",
  },
});

const mapStateToProps = (state) => {
  //console.log(state);
  const {form} = state.templateTrainer;
  const { group } = state.selectGroup;
  return { form, group };
};

export default withNavigation(connect(mapStateToProps)(EvalScreen));