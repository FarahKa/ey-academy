import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import MemberCard from "../components/MemberCard";

const GroupScreen = ({ navigation }) => {
  const item = navigation.getParam("item");
  console.log(item);
  return (
    <>
      <View style={styles.container}>
        <View style={{ width: 150 }}>
          <Text style={styles.group}>{item.group}</Text>
        </View>

        <FlatList
          data={item.members}
          keyExtractor={(member) => member.id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("MemberAssessment", { item: item });
                }}
              >
                <MemberCard item={item} />
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginStart: 10,
  },
  group: {
    fontWeight: "bold",
  },
});

export default GroupScreen;
