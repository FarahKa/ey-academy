import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";
import { FlatList } from "react-native-gesture-handler";
import ResultDetails from "./ResultDetails";
import { BannerComponent } from "./BannerComponent";
import colors from "../config/colors";

const ResultsList = ({ training, navigation }) => {


    return (
    <View style={styles.container}>
      <BannerComponent title={training.title}>
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
      </BannerComponent>
      {/* <Text style={styles.number}>Groups: {training.groups.length}</Text> */}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
});

export default withNavigation(ResultsList);
