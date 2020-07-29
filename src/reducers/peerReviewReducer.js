const initialState = { fetching: false, trainings: [] };


export function trainingsPR(state = initialState, action) {
  switch (action.type) {
    case "TRAININGS_REQUEST_PR":
      return {
        fetching: true,
        trainings: [],
      };
    case "TRAININGS_SUCCESS_PR":
      return {
        fetching: false,
        trainings: action.trainings,
      };
    case "TRAININGS_FAILURE_PR":
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

export function selectConsultantPR(consultant = {}, action) {
  switch (action.type) {
    case "CONSULTANT_SELECT_PR": {
      return { ...action.consultant, gbtId: action.gbtId };
    }
    case "CONSULTANT_CLEAR_PR": {
      return {};
    }
    default:
      return consultant;
  }
}

