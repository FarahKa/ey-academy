const initialState = { fetching: false, plannings: [] };

export function plannings(state = initialState, action) {
    switch (action.type) {
      case "PLANNING_REQUEST":
        return {
          fetching: true,
        plannings: [],
        };
      case "PLANNING_SUCCESS":
        return {
          fetching: false,
          plannings: action.plannings,
        };
      case "PLANNING_FAILED":
        return { fetching: false, plannings: [], error: action.error };
      default:
        return state;
    }
  }