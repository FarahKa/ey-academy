import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { dimmer } from "../../config/colors";
import { useDispatch, useSelector, connect } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";
import { withNavigation } from "react-navigation";
import ThemeComponent from "../../components/ThemeComponent";
import { evalActions } from "../../actions/evalActions";
import Theme from "../../components/form/ThemeComponent";
import colors from "../../config/colors";
//import { feedbackService } from "../../services/feedbackService";
import { loadingActions } from "../../actions/loadingActions";
import QuestionF from "../../components/QuestionF";
import MemberCardPR from "../../components/prlist/MemberCardPR";
import { evalService } from "../../services/evalService";
import { feedbackActions } from "../../actions/feedbackActions";
import Light from "../../components/LightComponent";

const FeedbackScreen = ({ navigation, form, group, answers, user }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("normal effect");
    if (!form || form.length === 0) {
      console.log("getting template");
      dispatch(feedbackActions.getTemplateFeedback()).then(
        (response) => {
          dispatch(loadingActions.stopLoading());
          dispatch({ type: "REFRESH_ANSWERS_F", sections: response });
        },
        (error) => dispatch(loadingActions.stopLoading())
      );
    } else {
      dispatch(loadingActions.stopLoading());
      dispatch({ type: "REFRESH_ANSWERS_F", sections: form });

      console.log("refreshed answers = " + answers);
    }
    console.log(form)
  }, []);

  function handleSubmitPress() {
    console.log("submit was pressed");
    dispatch(loadingActions.startLoading());
    const send = {
      Answers: answers,
      TCAId: form.TCAId,
      UserId: user.id,
      GroupTrainingId: group.gbtId,
    };

    evalService.submitAssessmentF(send).then(
      (response) => {
        //dispatch(trainingActions.markDone(group.groupId));
        console.log(response);
        navigation.navigate("FeedbackSearch");
      },
      (error) => {
        console.log(error);
        navigation.navigate("FeedbackSearch");
      }
    );
  }
  function handleQuitPress() {
    console.log("quit was pressed");
    navigation.navigate("FeedbackSearch");
  }

  return (
    <ThemeComponent>
      <SafeAreaView style={[styles.contenu, dimmer.dimmer]}>
        <FlatList
          data={form.sort((a, b) => { return a.sectionType > b.sectionType})}
          keyExtractor={(section) => section.id}
          renderItem={({ item: section }) => {
            return (
              <View>
                <Light>
                  <Text
                    style={{
                      textAlign: "center",
                      alignSelf: "center",
                    }}
                  >
                    {section.sectionField}
                  </Text>
                </Light>
                <FlatList
                  data={section.questions}
                  keyExtractor={(question) => question.id}
                  renderItem={({ item }) => {
                    return (
                      <QuestionF question={item} />
                    );
                  }}
                />
              </View>
            );
          }}
          ListFooterComponent={
            <>
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
  const answers = state.answers;
  const { form } = state.templateF;
  console.log(form);
  const group = state.selectGroupF;
  const { user } = state.authentication;
  return { form, group, answers, user };
};

export default withNavigation(connect(mapStateToProps)(FeedbackScreen));
