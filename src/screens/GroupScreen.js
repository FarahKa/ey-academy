import React, { useState, useEffect }  from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from "react-native";
//import { FlatList } from "react-native-gesture-handler";
import MemberCard from "../components/MemberCard";
import { SafeAreaView } from "react-native-safe-area-context";
import ThemeComponent from "../components/ThemeComponent";
import colors, {dimmer} from "../config/colors";
import ButtonComponent from "../components/ButtonComponent";
import { trainingActions } from "../actions";

import { withNavigation } from "react-navigation";


const GroupScreen = ({ navigation }) => {
  const item = navigation.getParam("item");

  useEffect(() => {
    const navListener = Navigation.events().bindComponent(this, componentId)

    // remove the listener during cleanup
    return () => {
      navListener.remove()
    }
  }, [item.id])

  const componentDidAppear = () => {
    console.log("component just appeared");
  }

  componentDidDisappear = () => {
    // do stuff when component disappears
  }


  return (
    <ThemeComponent>
         <SafeAreaView style={[{ flex: 1 }, dimmer.dimmer]}>
      <View style={styles.container}>

        <ButtonComponent label={`Evaluate ${item.name}`} onPress={() => {
          dispatch(trainingActions.selectGroup(item));
          navigation.navigate("Eval");
        }} />

        <FlatList
          data={item.consultants}
          keyExtractor={(member) => member.id}
          renderItem={({ item }) => {
            return (
              // <TouchableOpacity
              //   onPress={() => {
              //     navigation.navigate("MemberAssessment", { item: item });
              //   }}
              // >
                <MemberCard item={item} />
              // </TouchableOpacity>
            );
          }}
        />
      </View>
    </SafeAreaView>
    </ThemeComponent>
 
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginTop : 20
  },
  group: {
    fontWeight: "bold",
    color:colors.MISCHKA,
  },
});

export default withNavigation(GroupScreen);
