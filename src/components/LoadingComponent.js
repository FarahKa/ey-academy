import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { connect} from "react-redux";

const Loading = ({ loading }) => {
  return (
    <>
      {loading ? (
        <View style={styles.container}>
          <ActivityIndicator style={styles.indicator} size={70} color="#e6cd30"/>
        </View>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.8)",
    zIndex: 10,
    width: "100%",
    height: "100%",
    //marginTop:-15, 
    position: 'absolute'
  },
  indicator: {
      height:200,
  }
});

const mapStateToProps = (state) => {
  //console.log("yo");
  const loading  = state.loading;
  return { loading };
};

export default connect(mapStateToProps)(Loading);
