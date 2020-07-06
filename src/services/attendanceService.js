import eyAcademy from "../../api/ey-academy";

export const attendanceService = {
 attend,
}

function attend(code, token) {
    return eyAcademy
      .post("/user/attend", {
        code: code,
        token: token,
      })
      .then(response => {
        return response;
      });
  }