import eyAcademy from "../../api/ey-academy";

export const imageService = {
  getProfilePicture,
};

function getProfilePicture(userId) {
  return eyAcademy.get(`/mobile/getPicture/${userId}`).then(response => response.data, error => error)
}

