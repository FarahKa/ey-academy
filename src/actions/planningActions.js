import { planningService} from "../services/planningService";

export const planningActions = {
    getPlannings
  };


  function getPlannings(userId, role) {
    return (dispatch) => {
      dispatch({
        type: "PLANNING_REQUEST",
      });
      return new Promise((resolve, reject) => {
        planningService.getPlannings(userId, role).then(
          (plannings) => {
            dispatch({
              type: "PLANNING_SUCCESS",
              plannings:plannings,
            });
            resolve(plannings);
          },
          (error) => {
            console.log(error);
            dispatch({ type: "PLANNING_FAILED", error: error });
            reject(error);
          }
        );
      });
    };
  }