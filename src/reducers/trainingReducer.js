const initialState = { fetching: false, trainings: [] };

export const trainingConstants = {
  TRAININGS_REQUEST: "TRAININGS_REQUEST",
  TRAININGS_SUCCESS: "TRAININGS_SUCCESS",
  TRAININGS_FAILURE: "TRAININGS_FAILURE",
  TRAINING_GROUP_SELECT: "TRAINING_GROUP_SELECT",
  TRAINING_GROUP_CLEAR: "TRAINING_GROUP_CLEAR",
  MARK_DONE: "MARK_DONE",
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
      return { fetching: false, trainings: [], error: action.error };

    // case trainingConstants.MARK_DONE:
    //   for (var i in state) {
    //       for (var x in i.groups) {
    //         if (x.groupId === action.groupId) {
    //           x.evaluated = true;
    //           return state;
    //         }
    //       }
    //   }
    //   return state;

    default:
      return state;
  }
}

export function selectGroup(group = {}, action) {
  switch (action.type) {
    case trainingConstants.TRAINING_GROUP_SELECT: {
      return { group: action.group };
    }
    case trainingConstants.TRAINING_GROUP_CLEAR: {
      return { group: {} };
    }
    default:
      return group;
  }
}
