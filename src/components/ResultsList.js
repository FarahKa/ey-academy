import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";
import { FlatList } from "react-native-gesture-handler";
import ResultDetails from "./ResultDetails";

const ResultsList = ({ training, navigation }) => {


    return (
    <View style={styles.container}>
      <Text style={styles.title}>{training.title}</Text>
      <Text style={styles.number}>Groups: {training.groups.length}</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={training.groups}
        keyExtractor={(group) => group.group}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Group", { item: item });
              }}             
            >
              <ResultDetails item={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5,
  },
  number: {
    marginLeft: 15,
  },
});

export default withNavigation(ResultsList);
