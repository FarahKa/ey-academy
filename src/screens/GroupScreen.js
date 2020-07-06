import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import MemberCard from "../components/MemberCard";
import { SafeAreaView } from "react-native-safe-area-context";

const GroupScreen = ({ navigation }) => {
  const item = navigation.getParam("item");
  console.log(item);
  return (
    <SafeAreaView style={{flex:1}}>
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
    </SafeAreaView>
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
