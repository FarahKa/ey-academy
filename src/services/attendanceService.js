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
      // .then(response => {
      //   console.log(response);       
      //   return response;
      // });
  }

  function handleResponse(response) {
      // return response.text().then((text) => {
        if (response.status !== 200) {   
          const error = response.error;
          dispatch({type: ATTENDACE_FAILED, code:code});
          return Promise.reject(error);
        } 
        dispatch({type: ATTENDANCE_MARKED, code:code});   
        return response;
      ;
}