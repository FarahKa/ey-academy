import React, { useState } from "react";
import {FlatList} from "react-native";
import SearchBar from "../../components/SearchBar";
import { connect, useDispatch } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";
import ThemeComponent from "../../components/ThemeComponent";
import { dimmer } from "../../config/colors";
import { peerReviewActions } from "../../actions/index";
import { NavigationEvents } from "react-navigation";
import { loadingActions } from "../../actions/loadingActions";
import ListPR from "../../components/prlist/ListPRComponent";
import ButtonComponent from "../../components/ButtonComponent";


const PeerReviewSearchScreen = ({trainings, user}) => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();



  return (

        <ThemeComponent>
      <SafeAreaView style={[{ flex: 1 }, dimmer.dimmer]}>
        <NavigationEvents
          onWillFocus={(payload) => {
            console.log("will focus");
            dispatch({type : "CLEAR_CRITERIA_PR"})
            dispatch(peerReviewActions.getTrainingsPR(user.id)).then(
              () => {
                dispatch(loadingActions.stopLoading());
              },
              () => {
                dispatch(loadingActions.stopLoading());
              }
            );
          }}
        />
        <SearchBar
          term={term}
          onTermChange={(newTerm) => setTerm(newTerm)}
          onTermSubmit={() => {
            // useResults.searchApi('everything');
          }}
        />
        <FlatList
          data={trainings}
          keyExtractor={(training) => training.id}
          renderItem={({item}) => {
            return <ListPR training={item} />;
          }}
        />
      </SafeAreaView>
    </ThemeComponent>
  )



}


const mapStateToProps = (state) => {
    const { trainings } = state.trainingsPR;
    const { user } = state.authentication;
    return { trainings, user };
  };

export default connect(mapStateToProps)(PeerReviewSearchScreen);