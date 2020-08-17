import { combineReducers } from "redux";
import { attendance } from "./attendanceReducer";
import { authentication } from "./authenticationReducer";
import {
  trainings,
  selectGroup,
  trainingsJury,
  selectGroupJury,
} from "./trainingReducer";
import {
  templateTrainer,
  criteria,
  templateJury,
  criteriaJury,
  criteriaPeer,
  templatePeer,
} from "./evalReducer";
import { trainingsPR, selectConsultantPR } from "./peerReviewReducer";
import { loading } from "./loadingReducer";
import {
  trainingsF,
  selectGroupF,
  templateF,
  answers,
} from "./feedbackReducer";



export default combineReducers({
  templateTrainer: templateTrainer,
  templateJury: templateJury,
  authentication: authentication,
  trainings: trainings,
  selectGroup: selectGroup,
  selectGroupJury: selectGroupJury,
  trainingsJury: trainingsJury,
  attendance: attendance,
  criteria: criteria,
  criteriaJury: criteriaJury,
  loading: loading,

  trainingsPR: trainingsPR,
  selectConsultantPR: selectConsultantPR,
  criteriaPeer: criteriaPeer,
  templatePeer: templatePeer,

  
  trainingsF: trainingsF,
  selectGroupF: selectGroupF,
  templateF: templateF,
  answers: answers,
});
