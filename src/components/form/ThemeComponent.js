import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, FlatList, ScrollView} from "react-native";
import colors from "../../config/colors";
import Criterion from "./CriterionComponent";
import Light from "../LightComponent";

const Theme = ({ theme, role }) => {
  return (
    <>
      <Light>
        <Text
          style={{
            textAlign: "center",
            //color: colors.MISCHKA,
            alignSelf: "center",
          }}
        >
          {theme.title}
        </Text>
      </Light>
      <FlatList
      
        data={theme.criteria}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return <Criterion criterion={item} role={role} />;
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default Theme;
