import { evalService } from "../services/evalService";

export const evalActions = {
  getTemplateTrainer,
  getTemplateJury,
  getTemplatePR
};
const GET_TEMPLATE = "GET_TEMPLATE";
const TEMPLATE_SUCCESS = "TEMPLATE_SUCCESS";
const TEMPLATE_FAILURE = "TEMPLATE_FAILURE";

const GET_TEMPLATE_J = "GET_TEMPLATE_J";
const TEMPLATE_SUCCESS_J = "TEMPLATE_SUCCESS_J";
const TEMPLATE_FAILURE_J = "TEMPLATE_FAILURE_J";

const GET_TEMPLATE_PR = "GET_TEMPLATE_PR";
const TEMPLATE_SUCCESS_PR = "TEMPLATE_SUCCESS_PR";
const TEMPLATE_FAILURE_PR = "TEMPLATE_FAILURE_PR";

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

function getTemplateJury() {
  return (dispatch) => {
    dispatch({
      type: GET_TEMPLATE_J,
    });
    return new Promise((resolve, reject) => {
      evalService.getTemplateJury().then(
        (response) => {
          dispatch({ type: TEMPLATE_SUCCESS_J, form: response.data });
          resolve(response.data);
        },

        (error) => {
          console.log(error)
          dispatch({ type: TEMPLATE_FAILURE_J, form: {}, error: error });
          reject(error)
        }
      );
    });
  };
}

function getTemplatePR() {
  return (dispatch) => {
    dispatch({
      type: GET_TEMPLATE_PR,
    });
    return new Promise((resolve, reject) => {
      evalService.getTemplatePR().then(
        (response) => {
          dispatch({ type: TEMPLATE_SUCCESS_PR, form: response });
          resolve(response);
        },

        (error) => {
          console.log(error)
          dispatch({ type: TEMPLATE_FAILURE_PR, form: {}, error: error });
          reject(error)
        }
      );
    });
  };
}


// const SAVE_CRITERION = "SAVE_CRITERION";
// const SAVE_CRITERION_J = "SAVE_CRITERION_J";
// function saveCriterion(criterion){
//   return {
//     type: SAVE_CRITERION,
//     criterion: criterion
//   }
// }