import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { withNavigation } from "react-navigation";
//import { FlatList, ScrollView } from "react-native-gesture-handler";
import CardComponent from "./CardComponent";
import { useDispatch } from "react-redux";
import { trainingActions } from "../../actions";

const ResultsList = ({ training, navigation }) => {
  dispatch=useDispatch();

  return (
    <FlatList
      //showsHorizontalScrollIndicator={false}
      //horizontal
      data={training.groups}
      keyExtractor={(item) => item.groupId}
      renderItem={({ item }) => {
        return (
          //<ScrollView>
            <TouchableOpacity
              onPress={() => {
                dispatch(trainingActions.selectGroup(item));
                navigation.navigate("Group", { item: item });
              }}
            >
              <CardComponent title={item.name} />
            </TouchableOpacity>
          //</ScrollView>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
});

export default withNavigation(ResultsList);
