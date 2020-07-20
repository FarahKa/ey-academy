import { trainingConstants } from "../reducers/trainingReducer";
import { trainingService } from "../services/trainingsService";

export const trainingActions = {
  getTrainings,
  selectGroup,
  markDone,
  clearGroup
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

