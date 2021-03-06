import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { View, StyleSheet, Text } from "react-native";
import Dark from "../components/DarkComponent";
import { AirbnbRating } from "./rating/src/index";
import FormTextInput from "./FormTextInputComponent";
import colors from "../config/colors";
import { feedbackActions } from "../actions/feedbackActions";

const QuestionF = ({ question }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();
  var answers = ["Strongly disagree", "Disagree", "Agree", "Strongly agree"];

  function handleRatingGiven(rating) {
    setRating(rating);
    console.log("setRating : rating is : " + answers[rating - 1]);
    
    var answer ={
        QuestionId: question.id,
        AnswerChoice: answers[rating - 1],
        Cheked: 1,
      } 

    dispatch(feedbackActions.updateAnswer(answer, "combo"));
    console.log('dispatch is done');
  }

  function handleCommentSubmit() {
    console.log("comment : " + comment);

    var answer ={
      QuestionId: question.id,
      AnswerChoice: comment,
      Cheked: 1,
    } 
    dispatch(feedbackActions.updateAnswer(answer, "text"));
  }

  return (
    <View>
      <Dark>
        <Text style={{ color: colors.MISCHKA, fontWeight: "bold" }}>
          {question.questonField}
        </Text>
        {question.type === "combo" ? (
          <AirbnbRating
            reviews={answers}
            count={4}
            //defaultRating={0}
            onFinishRating={handleRatingGiven}
          />
        ) : (
          <FormTextInput
            term={comment}
            onTermChange={(newTerm) => setComment(newTerm)}
            onTermSubmit={handleCommentSubmit}
            placeholder="Give us details..."
            additionalStyle={{ width: "70%", alignSelf: "center" }}
          />
        )}
      </Dark>
    </View>
  );
};

const styles = StyleSheet.create({});

export default QuestionF;
