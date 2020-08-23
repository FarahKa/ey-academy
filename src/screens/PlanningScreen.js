import React, { useState } from "react";
import { FlatList, Alert, Text, StyleSheet, View } from "react-native";
import SearchBar from "../components/SearchBar";
import { connect, useDispatch } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";
import ThemeComponent from "../components/ThemeComponent";
import colors, { dimmer } from "../config/colors";
import { planningActions } from "../actions/planningActions";
import { NavigationEvents, withNavigation } from "react-navigation";
import { loadingActions } from "../actions/loadingActions";
import ListF from "../components/flist/ListFComponent";
import Light from "../components/LightComponent";
import Dark from "../components/DarkComponent";
import Seance from "../components/SeanceComponent";

const PlanningScreen = ({ plannings, user, navigation }) => {
  const [term, setTerm] = useState("");
  const [selectedPlanning, setselectedPlanning] = useState([]);
  const dispatch = useDispatch();

  const getH = (date) => {

    var format = new Date(date);
    console.log(date + "\n" + format + "\n" + format.getUTCHours())
    return format.getUTCHours();
  };

  const handleCode = (code, setScanned) => {
    console.log("code is" + code);

    if (code) {
      dispatch(loadingActions.startLoading());
      var selection = plannings.filter((planning) => {
        planning.qrCode === code;
      });
      if (Array.isArray(selection) && selection.length) {
        setselectedPlanning(selection);
      } else {
        setselectedPlanning([]);
      }
      dispatch(loadingActions.stopLoading());
      console.log("stopped loading");
      setScanned(false);
    }
  };

  return (
    <ThemeComponent>
      <SafeAreaView style={[{ flex: 1 }, dimmer.dimmer]}>
        <NavigationEvents
          onWillFocus={(payload) => {
            console.log("will focus");
            dispatch(planningActions.getPlannings(user.id, user.role)).then(
              (plannings) => {
                console.log(plannings);
                dispatch(loadingActions.stopLoading());
              },
              () => {
                dispatch(loadingActions.stopLoading());
              }
            );
          }}
        />
        <SearchBar
          qrpressed={() => {
            navigation.navigate("QRScanner", { handleCode: handleCode });
          }}
          term={term}
          onTermChange={(newTerm) => {
            setTerm(newTerm);
            var selection = plannings.filter((planning) => {
              planning.qrCode === newTerm;
            });
            if (Array.isArray(selection) && selection.length) {
              setselectedPlanning(selection);
            } else {
              setselectedPlanning([]);
            }
          }}
          onTermSubmit={() => {}}
        />

        {Array.isArray(selectedPlanning) && selectedPlanning.length ? (
          <FlatList
            ListHeaderComponent={
              <View style={styles.background}>
              <Text style={styles.title}>Selected Event:</Text>
            </View>
            }
            data={selectedPlanning}
            keyExtractor={(planning) => planning.id}
            renderItem={({ item }) => {
              return <ListF planning={item} />;
            }}
          />
        ) : (
          <>
            <View style={styles.background}>
              <Text style={styles.title}>Upcoming:</Text>
            </View>
            <FlatList
              data={plannings.filter((planning) => {
                var start = new Date(planning.startDate);
                start.setHours(0, 0, 0, 0);
                var now = new Date();
                now.setHours(0, 0, 0, 0);
                return start >= now;
              }).sort((a, b) => {
                return a.startDate > b.startDate               
              })}
              keyExtractor={(planning) => planning.id}
              renderItem={({ item }) => {
                return (
                  <Seance planning={item}/>
                );
              }}
            />
            <View style={styles.background}>
              <Text style={styles.title}>History:</Text>
            </View>
            <FlatList
              data={plannings.filter((planning) => {
                var start = new Date(planning.startDate);
                start.setHours(0, 0, 0, 0);
                var now = new Date();
                now.setHours(0, 0, 0, 0);
                return start < now;
              }).sort((a, b) => {
                return a.startDate < b.startDate               
              })}
              keyExtractor={(planning) => planning.id}
              renderItem={({ item }) => {
                return (
                  <Seance planning={item}/>
                );
              }}
            />
          </>
        )}
      </SafeAreaView>
    </ThemeComponent>
  );
};

 const styles= StyleSheet.create({
  background: {
    marginTop: 5,
    //marginBottom: 5,
    backgroundColor: colors.MISCHKA,
    height: 40,
    //borderRadius: 3,
    marginHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    //fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    //marginBottom: 5,
    textTransform: "uppercase",
    color: colors.DARK_GREY,
  },

})

const mapStateToProps = (state) => {
  const { plannings } = state.plannings;
  const { user } = state.authentication;
  return { plannings, user };
};

export default withNavigation(connect(mapStateToProps)(PlanningScreen));
