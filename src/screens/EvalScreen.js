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
import ButtonComponent from "../components/ButtonComponent";
import { SafeAreaView } from "react-native-safe-area-context";
import { withNavigation } from "react-navigation";
import ThemeComponent from "../components/ThemeComponent";
import { evalActions } from "../actions/evalTrainerActions";
import Theme from "../components/form/ThemeComponent";
import colors from "../config/colors";
import Dark from "../components/DarkComponent";
import FormTextInput from "../components/FormTextInputComponent";

const EvalScreen = ({ navigation, form, group }) => {
  const [submitted, setSubmitted] = useState(false);
  const [remarkable, setRemarkable] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(evalActions.getTemplateTrainer()).then(() => console.log(""));
  }, []);

  function handleSubmitPress() {
    console.log("submit was pressed");
  }
  function handleQuitPress() {
    console.log("quit was pressed");
  }

  return (
    <ThemeComponent>
      <SafeAreaView style={[styles.contenu, dimmer.dimmer]}>
        <FlatList
          ListHeaderComponent={<></>}
          data={form.themes}
          keyExtractor={(theme) => theme.id}
          renderItem={({ item }) => {
            return <Theme theme={item} />;
          }}
          ListFooterComponent={
            <>
              <Dark>
                <FormTextInput
                  term={remarkable}
                  onTermChange={(newTerm) => setRemarkable(newTerm)}
                  onTermSubmit={() => {}}
                  placeholder="Remarkable Performance"
                  additionalStyle={{ width: "70%", alignSelf: "center" }}
                />
              </Dark>
              <View style={styles.form}>
                <LittleButton
                  color={colors.SILVER}
                  label="Quit"
                  onPress={handleQuitPress}
                />
                <LittleButton
                  color={colors.MISCHKA}
                  label="Submit"
                  onPress={handleSubmitPress}
                />
              </View>
            </>
          }
        />
      </SafeAreaView>
    </ThemeComponent>
  );
};

const LittleButton = ({ color, label, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: color }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "40%",
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    paddingVertical: 12,
    borderRadius: 4,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "rgba(255,255,255,0.7)",
  },
  contenu: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    //backgroundColor: "rgba(0,0,0,0.5)",
  },
  form: {
    //flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    backgroundColor: colors.DARK_GREY,
  },
});

const mapStateToProps = (state) => {
  //console.log(state);
  const { form } = state.templateTrainer;
  const { group } = state.selectGroup;
  return { form, group };
};

export default withNavigation(connect(mapStateToProps)(EvalScreen));
