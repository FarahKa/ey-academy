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
        //console.log(response);       
        return response;
      });
  }