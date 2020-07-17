import React, { useState } from "react";
import { useDispatch, connect } from "react-redux";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../../config/colors";
import Dark from "../DarkComponent";
import { Rating, AirbnbRating } from "../rating/src/index";
import FormTextInput from "../FormTextInputComponent";
import { evalActions } from "../../actions/evalTrainerActions";

const Criterion = ({ criterion }) => {
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const dispatch = useDispatch();

  function handleRatingGiven(rating) {
    setRating(rating);
    console.log("setRating : rating is : " + rating);
    dispatch({
      type: "ADD_CRITERION",
      criterion: {
        CriterionId: criterion.id,
        NoteFA: rating,
        comment: comment,
      },
    });
  }
  function handleCommentSubmit() {
    console.log("setcomment : comment is : " + comment);
    dispatch({
      type: "ADD_CRITERION",
      criterion: {
        CriterionId: criterion.id,
        NoteFA: rating,
        comment: comment,
      },
    });

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

const mapStateToProps = (state) => {
  const { criteria } = state.criteria;
  return { criteria };
};

export default Criterion;
