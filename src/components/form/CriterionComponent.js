import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../../config/colors";
import Dark from "../DarkComponent";
import { Rating, AirbnbRating } from '../rating/src/index';
import FormTextInput from "../FormTextInputComponent";

const Criterion = ({ criterion }) => {
  const [comment, setComment] = useState("");
  function handleCommentSubmit () {
    console.log("yay a comment");
  }
  return (
    <View>
      <Dark>
        <Text style={{color: colors.MISCHKA,}}>{criterion.title}.</Text>
        <AirbnbRating
          reviews={["Bad Performance", "Did not meet expectations", "Met expectations", "Exceeded expectations", "Highly Exceeded expectations"]}
          defaultRating={0}
        />
        <FormTextInput
        term={comment}
        onTermChange={(newTerm) => setComment(newTerm)}
        onTermSubmit={handleCommentSubmit}
        placeholder="Tell us more..."
        additionalStyle={{width:"70%", alignSelf:"center"}}

        />
        

      </Dark>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Criterion;
