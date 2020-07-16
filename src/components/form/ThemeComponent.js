import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import colors from "../../config/colors";
import Criterion from "./CriterionComponent";
import Dark from "../DarkComponent";

const Theme = ({ theme }) => {
  return (
    <ScrollView>
      <Dark>
        <Text style={{   textAlign: 'center', color: colors.MISCHKA, alignSelf:"center" }}>{theme.title}</Text>
      </Dark>

      <FlatList
        data={theme.criteria}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return <Criterion criterion={item} />;
        }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default Theme;
