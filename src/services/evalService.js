import eyAcademy from "../../api/ey-academy";

export const evalService = {
  getTemplateTrainer,
  submitAssessmentTrainer,
  deleteAssessmentTrainer,
  getTemplateJury,
  submitAssessmentJury,
  deleteAssessmentJury,

  getTemplatePR,
  deletePeerReview,
  submitAssessmentPR,


  getTemplateFeedback,
  submitAssessmentF,
  deleteFeedback,
};

function getTemplateTrainer() {
  return eyAcademy.get("/mobile/templateTrainer");
  // .then(response => {
  //   console.log(response);
  //   return response;
  // });
}

function getTemplateJury() {
  return eyAcademy.get("/mobile/templateJury");
}

function getTemplateFeedback() {
  return eyAcademy.get("/mobile/templateFeedback").then((response) => response.data, (error) => error);
}

function getTemplatePR() {
  return eyAcademy.get("/mobile/templatePeer").then(
    (response) => {
      var categories = [];
      response.data.tcaCategories.forEach((item) => {
        categories = [...categories, item.category];
      });
      var form = {TCAId: response.data.id, categories: categories}

      return form;
    },
    (error) => error
  );
}

function submitAssessmentTrainer(request) {
  return eyAcademy.post("/mobile/submitAssessmentTrainer", request);
}

function submitAssessmentJury(request) {
  return eyAcademy.post("/mobile/submitAssessmentJury", request);
}

function submitAssessmentPR(request){
  return eyAcademy.post("/mobile/submitAssessmentPR", request);
}

function submitAssessmentF(request){
  return eyAcademy.post("/mobile/submitAssessmentF", request);
}

function deleteAssessmentTrainer(request) {
  return eyAcademy.post("/mobile/deleteAssessment", request);
}

function deleteAssessmentJury(request) {
  return eyAcademy.post("/mobile/deleteAssessmentJury", request);
}

function deletePeerReview(request){
  return eyAcademy.post("/mobile/deletePeerReview", request);
}

function deleteFeedback(request){
  return eyAcademy.post("/mobile/deleteFeedback", request);
}