import eyAcademy from "../../api/ey-academy";

export const attendanceService = {
 attend,
}

function attend(code, token) {
    return eyAcademy
      .post("/presence/checkin", {
        QRCode: code,
        UserId: token,
      })
      .then(response => {
        
        return response;
      });
  }