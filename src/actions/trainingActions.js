import { trainingConstants } from "../reducers/trainingReducer";
import { trainingService } from "../services/trainingsService";

export const trainingActions = {
  getTrainings,
  selectGroup,
  markDone,
  clearGroup,
  getTrainingsJury,
  selectGroupJury,
  clearGroupJury
};

function getTrainings(userId) {
  return (dispatch) => {
    dispatch({
      type: trainingConstants.TRAININGS_REQUEST,
    });
    return new Promise((resolve, reject) => {
      trainingService.getTrainings(userId).then(
        (trainings) => {
          dispatch({
            type: trainingConstants.TRAININGS_SUCCESS,
            trainings: trainings,
          });
          resolve(trainings);
        },
        (error) => {
          console.log(error);
          dispatch({ type: trainingConstants.TRAININGS_FAILED, error: error });
          reject(error);
        }
      );
    });
  };
}

function markDone(groupId) {
  return (dispatch) => {
    dispatch({
      type: trainingConstants.MARK_DONE,
      groupId: groupId
    })
  }
}

function selectGroup(group) {
  return (dispatch) => {
    dispatch({
      type: trainingConstants.TRAINING_GROUP_SELECT,
      group: group
    });
  };
}

function clearGroup() {
  return (dispatch) => {
    dispatch({
      type: trainingConstants.TRAINING_GROUP_CLEAR
    });
  };
}


function getTrainingsJury(userId) {
  return (dispatch) => {
    dispatch({
      type: trainingConstants.TRAININGS_REQUEST_J,
    });
    return new Promise((resolve, reject) => {
      trainingService.getTrainingsJury(userId).then(
        (trainings) => {
          dispatch({
            type: trainingConstants.TRAININGS_SUCCESS_J,
            trainings: trainings,
          });
          resolve(trainings);
        },
        (error) => {
          console.log(error);
          dispatch({ type: trainingConstants.TRAININGS_FAILED_J, error: error });
          reject(error);
        }
      );
    });
  };
}


function selectGroupJury(group) {
  return (dispatch) => {
    dispatch({
      type: trainingConstants.TRAINING_GROUP_SELECT_J,
      group: group
    });
  };
}

function clearGroupJury() {
  return (dispatch) => {
    dispatch({
      type: trainingConstants.TRAINING_GROUP_CLEAR_J
    });
  };
}