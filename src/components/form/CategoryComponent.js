import React, { useState } from "react";
import { useDispatch, connect } from "react-redux";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../../config/colors";
import Dark from "../DarkComponent";
import { Rating, AirbnbRating } from "../rating/src/index";
import FormTextInput from "../FormTextInputComponent";
import { evalActions } from "../../actions/evalActions";

const Category = ({ category, consultantId }) => {
  const [rating, setRating] = useState(0);
  const dispatch = useDispatch();

  function handleRatingGiven(rating) {
    setRating(rating);
    console.log("setRating : rating is : " + rating);
      dispatch({
        type: "ADD_CRITERION_PR",
        criterion: {
          CategoryId: category.id,
          NoteCA: rating,
        },
        consultantId: consultantId
      });
  }

  return (
    <View>
      <Dark>
        <Text style={{ color: colors.MISCHKA, fontWeight:"bold" }}>{category.categoryTitle}.</Text>
        <Text style={{ color: colors.MISCHKA }}>{category.categoryName}.</Text>
        <AirbnbRating
          reviews={[
            "No help at all to the group in this respect",
            "Not as good as most of the group in this respect ",
            "About average for the group in this respect ",
            "Better than most of the group in this respect ",
          ]}
          count={4}
          defaultRating={0}
          onFinishRating={handleRatingGiven}
        />
      </Dark>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Category;
