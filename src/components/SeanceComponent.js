import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import colors from "../config/colors";

const Seance = ({ planning }) => {
  const getH = (date) => {
    var format = new Date(date);
    console.log(date + "\n" + format + "\n" + format.getUTCHours());
    return format.getUTCHours();
  };

  const getM = (date) => {
    var format = new Date(date);
    console.log(date + "\n" + format + "\n" + format.getUTCHours());
    return format.getUTCMonth();
  };

  const getD = (date) => {
    var format = new Date(date);
    console.log(date + "\n" + format + "\n" + format.getUTCHours());
    return format.getUTCDate();
  };

  const mois = [
    "Jan.",
    "Feb.",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug.",
    "Sept.",
    "Oct.",
    "Nov.",
    "Dec.",
  ];
  return (
    <View style={styles.container}>
      <View style={styles.memberCard}>
        <View style={styles.image}>
          <Text style={styles.day}>{getD(planning.startDate)}</Text>
          <Text style= { styles.month}>{mois[getM(planning.startDate)]}</Text>
        </View>
        <Text style={styles.name}>
          {planning.training.trainingName} {`\n`}
          {planning.name} {`\n`}
          {planning.location} De {getH(planning.startDate)}h à{" "}
          {getH(planning.endDate)}h
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  day: { alignSelf: "center", fontSize: 30, fontWeight: "bold" },
  month: {
    alignSelf: "center", fontSize: 10, fontWeight: "bold"
  },
  container: {
    marginHorizontal: 12,
  },
  memberCard: {
    minHeight: 100,
    borderRadius: 30,
    marginBottom: 5,
    backgroundColor: colors.DIMMER,
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 60,
    margin: 20,
    backgroundColor: colors.MISCHKA,
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
  },
  name: {
    // fontWeight: "bold",
    flex: 1,
    color: colors.MISCHKA,
  },
});

export default Seance;
