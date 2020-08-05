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
//import { peerReviewService } from "../../services/peerReviewService";
import { loadingActions } from "../../actions/loadingActions";
import Category from "../../components/form/CategoryComponent";
import MemberCardPR from "../../components/prlist/MemberCardPR";

const PeerReviewScreen = ({ navigation, form, group, criteria, user }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("normal effect");
    if (Object.keys(form).length === 0) {
      console.log("getting template");
      dispatch(evalActions.getTemplatePR()).then(
        (response) => {
          dispatch(loadingActions.stopLoading());
          group.consultants.forEach((consultant) => {
            dispatch({
              type: "REFRESH_CRITERIA_PR",
              categories: response.categories,
              consultantId: consultant.id
            });
          });
        },
        () => dispatch(loadingActions.stopLoading())
      );
    } else {
      dispatch(loadingActions.stopLoading());
      console.log(form.TCAId);
      group.consultants.forEach((consultant) => {
        dispatch({
          type: "REFRESH_CRITERIA_PR",
          categories: form.categories,
          consultantId: consultant.id
        });
      });
      console.log("refreshed criteria = " + criteria);
    }
  }, []);

  function handleSubmitPress() {
    console.log("submit was pressed");
    dispatch(loadingActions.startLoading());
    const send = {
      Marks: criteria,
      TCAId: form.TCAId,
      ConsultantNoteId: consultant.id,
      UserId: user.id,
      GroupTrainingId: consultant.gbtId,
    };

    // peerReviewService.submitAssessmentPR(send).then(
    //   (reponse) => {
    //     //dispatch(trainingActions.markDone(group.groupId));
    //     navigation.navigate("SearchJury");
    //   },
    //   (error) =>{console.log(error); navigation.navigate("SearchJury");}
    // );
  }
  function handleQuitPress() {
    console.log("quit was pressed");
    navigation.navigate("PeerReviewSearch");
  }

  return (
    <ThemeComponent>
      <SafeAreaView style={[styles.contenu, dimmer.dimmer]}>
        <FlatList
          data={group.consultants}
          keyExtractor={(consultant) => consultant.id}
          renderItem={({ consultant }) => {
            <View>
              <MemberCardPR item={consultant} />
              <FlatList
                data={form.categories}
                keyExtractor={(category) => category.id}
                renderItem={({ item }) => {
                  return <Category category={item} consultantId={consultant.id} />;
                }}
              />
            </View>;
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
  const criteria = state.criteriaPeer;
  console.log("________________________________________________________")
  const { form } = state.templatePeer;
  const group = state.selectConsultantPR;
  console.log(group);
  console.log(form);
  const { user } = state.authentication;
  return { form, group, criteria, user };
};

export default withNavigation(connect(mapStateToProps)(PeerReviewScreen));
