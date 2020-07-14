const initialState = { fetching: false, trainings: [] };

export const trainingConstants = {
  TRAININGS_REQUEST: "TRAININGS_REQUEST",
  TRAININGS_SUCCESS: "TRAININGS_SUCCESS",
  TRAININGS_FAILURE: "TRAININGS_FAILURE",
};

export function trainings(state = initialState, action) {
  switch (action.type) {
    case trainingConstants.TRAININGS_REQUEST:
      return {
        fetching: true,
        trainings: [],
      };
    case trainingConstants.TRAININGS_SUCCESS:
      return {
        fetching: false,
        trainings: action.trainings,
      };
    case trainingConstants.TRAININGS_FAILURE:
      return { fetching: false, trainings: [], error:action.error };
    default:
      return state;
  }
}

export function selectedTraining(selectedTraining = null, action) {
    if (action.type === "TRAINING_SELECTED") {
      return action.payload;
    }
    return selectedTraining;
  };
