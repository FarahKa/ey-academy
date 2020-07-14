import eyAcademy from "../../api/ey-academy";

export const trainingService = {
  getTrainings
};

function getTrainings(userId) {
  return eyAcademy.get(`/mobile/trainings/${userId}`).then(response => response.data, error => error)
}
