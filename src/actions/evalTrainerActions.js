import { evalService } from "../services/evalService";

export const evalActions = {
  getTemplateTrainer,
  saveCriterion
};
const GET_TEMPLATE = "GET_TEMPLATE";
const TEMPLATE_SUCCESS = "TEMPLATE_SUCCESS";
const TEMPLATE_FAILURE = "TEMPLATE_FAILURE";

function getTemplateTrainer() {
  return (dispatch) => {
    dispatch({
      type: GET_TEMPLATE,
    });
    return new Promise((resolve, reject) => {
      evalService.getTemplateTrainer().then(
        (response) => {
          dispatch({ type: TEMPLATE_SUCCESS, form: response.data });
          resolve(response.data);
        },

        (error) => {
          console.log(error)
          dispatch({ type: TEMPLATE_FAILURE, form: {}, error: error });
          reject(error)
        }
      );
    });
  };
}


const SAVE_CRITERION = "SAVE_CRITERION";

function saveCriterion(criterion){
  return {
    type: SAVE_CRITERION,
    criterion: criterion
  }
}