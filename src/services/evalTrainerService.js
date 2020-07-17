import eyAcademy from "../../api/ey-academy";

export const evalTrainerService = {
 getTemplateTrainer,
 submitAssessmentTrainer,
}

function getTemplateTrainer(code, token) {
    return eyAcademy
      .get("/mobile/templateTrainer")
      // .then(response => {
      //   console.log(response);       
      //   return response;
      // });
  }

function submitAssessmentTrainer(request) {

  return eyAcademy.post("/mobile/submitAssessmentTrainer", request)

}