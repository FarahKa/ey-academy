import React, { useState } from "react";
import { useDispatch, connect } from "react-redux";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../../config/colors";
import Dark from "../DarkComponent";
import { Rating, AirbnbRating } from "../rating/src/index";
import FormTextInput from "../FormTextInputComponent";
import { evalActions } from "../../actions/evalActions";

const Criterion = ({ criterion, role }) => {
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const dispatch = useDispatch();

  function handleRatingGiven(rating) {
    setRating(rating);
    console.log("setRating : rating is : " + rating);
    if (role === "trainer") {
      console.log("role is trainer yo");
      dispatch({
        type: "ADD_CRITERION",
        criterion: {
          CriterionId: criterion.id,
          NoteFA: rating,
          comment: comment,
        },
      });
    } else if (role === "jury") {
      console.log("indeed a jury");
      dispatch({
        type: "ADD_CRITERION_J",
        criterion: {
          CriterionId: criterion.id,
          CriterionJAId: criterion.id,
          NoteJA: rating,
          comment: comment,
        },
      });
    } else {
      console.log("no role found");
    }
  }
  function handleCommentSubmit() {
    console.log("setcomment : comment is : " + comment);
    if(role === "jury"){
      dispatch({
        type: "ADD_CRITERION_J",
        criterion: {
          CriterionId: criterion.id,
          NoteFA: rating,
          comment: comment,
        },
      });
    } else if (role === "trainer") {
          dispatch({
      type: "ADD_CRITERION",
      criterion: {
        CriterionId: criterion.id,
        NoteFA: rating,
        comment: comment,
      },
    });
    } else {
      console.log("role not found")
    }

  }
  return (
    <View>
      <Dark>
        <Text style={{ color: colors.MISCHKA }}>{criterion.title}.</Text>
        <AirbnbRating
          reviews={[
            "Bad Performance",
            "Did not meet expectations",
            "Met expectations",
            "Exceeded expectations",
            "Highly Exceeded expectations",
          ]}
          defaultRating={0}
          onFinishRating={handleRatingGiven}
        />
        <FormTextInput
          term={comment}
          onTermChange={(newTerm) => setComment(newTerm)}
          onTermSubmit={handleCommentSubmit}
          placeholder="Tell us more..."
          additionalStyle={{ width: "70%", alignSelf: "center" }}
        />
      </Dark>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Criterion;
