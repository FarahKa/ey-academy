import eyAcademy from "../../api/ey-academy";

export const trainingService = {
  getTrainings,
  getTrainingsJury
};

function getTrainings(userId) {
  return eyAcademy.get(`/mobile/trainings/${userId}`).then(response => response.data, error => error)
}

function getTrainingsJury(userId) {
  return eyAcademy.get(`/mobile/trainingsJury/${userId}`).then(response => response.data, error => error)
}
