import eyAcademy from "../../api/ey-academy";

export const trainingService = {
  getTrainings,
  getTrainingsJury,
  getTrainingsPR,
  getTrainingsF,
  getDocuments,
  getDocument
};

function getTrainings(userId) {
  return eyAcademy.get(`/mobile/trainings/${userId}`).then(response => response.data, error => error)
}

function getTrainingsJury(userId) {
  return eyAcademy.get(`/mobile/trainingsJury/${userId}`).then(response => response.data, error => error)
}

function getTrainingsPR(userId) {
  return eyAcademy.get(`/mobile/getTrainingsCA/${userId}`).then(response => response.data, error => error)
}

function getTrainingsF(userId) {
  return eyAcademy.get(`/mobile/getTrainingsF/${userId}`).then(response => response.data, error => error)
}

function getDocuments(userId) {
  return eyAcademy.get(`/mobile/getDocuments/${userId}`).then(response => response.data, error => error)
}

function getDocument(docId) {
  return eyAcademy.get(`/mobile/getFileDocument/${docId}`).then(response => response.data, error => error)
}