

//feedback

import {trainingService} from "../services/trainingsService"
import { evalService } from "../services/evalService";

export const feedbackActions = {
    getTrainingsF,
    selectGroupF,
    clearGroupF,
    getTemplateFeedback
  };


function getTrainingsF(userId) {
    return (dispatch) => {
      dispatch({
        type: "TRAININGS_REQUEST_F",
      });
      return new Promise((resolve, reject) => {
        trainingService.getTrainingsF(userId).then(
          (trainings) => {
            console.log(trainings);
            dispatch({
              type: "TRAININGS_SUCCESS_F",
              trainings: trainings,
            });
            resolve(trainings);
          },
          (error) => {
            console.log(error);
            dispatch({ type: "TRAININGS_FAILURE_F", error: error });
            reject(error);
          }
        );
      });
    };
  }
  
  
  function selectGroupF(group) {
    return (dispatch) => {
      dispatch({
        type: "GROUP_SELECT_F",
        group:group
      });
    };
  }
  
  function clearGroupF() {
    return (dispatch) => {
      dispatch({
        type: "GROUP_CLEAR_F"
      });
    };
  }

  const GET_TEMPLATE_F = "GET_TEMPLATE_F";
const TEMPLATE_SUCCESS_F = "TEMPLATE_SUCCESS_F";
const TEMPLATE_FAILURE_F = "TEMPLATE_FAILURE_F";


function getTemplateFeedback() {
    return (dispatch) => {
      dispatch({
        type: GET_TEMPLATE_F,
      });
      return new Promise((resolve, reject) => {
        evalService.getTemplateFeedback().then(
          (response) => {
            dispatch({ type: TEMPLATE_SUCCESS_F, form: response.data });
            resolve(response.data);
          },
  
          (error) => {
            console.log(error)
            dispatch({ type: TEMPLATE_FAILURE_F, form: {}, error: error });
            reject(error)
          }
        );
      });
    };
  }
  