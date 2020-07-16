import { evalTrainerService } from "../services/evalTrainerService";

export const evalActions = {
  getTemplateTrainer,
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
      evalTrainerService.getTemplateTrainer().then(
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