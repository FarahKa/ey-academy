import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { withNavigation } from "react-navigation";
//import { FlatList, ScrollView } from "react-native-gesture-handler";
import CardComponent from "./CardComponent";

const ResultsList = ({ training, navigation }) => {


  return (
    <FlatList
      //showsHorizontalScrollIndicator={false}
      //horizontal
      data={training.groups}
      keyExtractor={(group) => group.id}
      renderItem={({ item }) => {
        return (
          //<ScrollView>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Group", { item: item });
              }}
            >
              <CardComponent item={item} title={item.name} />
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
