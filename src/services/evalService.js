import eyAcademy from "../../api/ey-academy";

export const evalService = {
 getTemplateTrainer,
 submitAssessmentTrainer,
 deleteAssessmentTrainer,
 getTemplateJury
}

function getTemplateTrainer() {
    return eyAcademy
      .get("/mobile/templateTrainer")
      // .then(response => {
      //   console.log(response);       
      //   return response;
      // });
  }

  function getTemplateJury(){
    return eyAcademy.get("/mobile/templateJury")
  }

function submitAssessmentTrainer(request) {

  return eyAcademy.post("/mobile/submitAssessmentTrainer", request)

}


function deleteAssessmentTrainer(request) {
  return eyAcademy.post("/mobile/deleteAssessment", request)

}