import eyAcademy from "../../api/ey-academy";

export const planningService = {
  getPlannings,
};

function getPlannings(userId, role) {
  if (role === "consultant") {
    return eyAcademy.get(`/mobile/listPlanningsC/${userId}`).then(
      (response) => response.data,
      (error) => error
    );
  } else if (role === "trainer") {
    return eyAcademy.get(`/mobile/listPlanningsF/${userId}`).then(
      (response) => response.data,
      (error) => error
    );
  } else {
    return eyAcademy.get(`/mobile/listPlanningsJ/${userId}`).then(
      (response) => response.data,
      (error) => error
    );
  }
}
