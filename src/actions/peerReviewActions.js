

//peer review

import {trainingService} from "../services/trainingsService"
export const peerReviewActions = {
    getTrainingsPR,
    selectConsultantPR,
    clearConsultantPR
  };


function getTrainingsPR(userId) {
    return (dispatch) => {
      dispatch({
        type: "TRAININGS_REQUEST_PR",
      });
      return new Promise((resolve, reject) => {
        trainingService.getTrainingsPR(userId).then(
          (trainings) => {
            dispatch({
              type: "TRAININGS_SUCCESS_PR",
              trainings: trainings,
            });
            resolve(trainings);
          },
          (error) => {
            console.log(error);
            dispatch({ type: "TRAININGS_FAILURE_PR", error: error });
            reject(error);
          }
        );
      });
    };
  }
  
  
  function selectConsultantPR(group) {
    return (dispatch) => {
      dispatch({
        type: "CONSULTANT_SELECT_PR",
        group:group
      });
    };
  }
  
  function clearConsultantPR() {
    return (dispatch) => {
      dispatch({
        type: "CONSULTANT_CLEAR_PR"
      });
    };
  }