import eyAcademy from "../../api/ey-academy";

export const evalTrainerService = {
 getTemplateTrainer,
}

function getTemplateTrainer(code, token) {
    return eyAcademy
      .get("/mobile/templateTrainer")
      // .then(response => {
      //   console.log(response);       
      //   return response;
      // });
  }