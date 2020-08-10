import { attendanceService } from "../services/attendanceService";

export const attendanceActions = {
  markAttendance,
};
const MARK_ATTENDANCE = "MARK_ATTENDANCE";
const ATTENDANCE_MARKED = "ATTENDANCE_MARKED";
const ATTENDACE_FAILED = "ATTENDANCE_FAILED";

// function markAttendance(code, token) {
//   return function (dispatch) {
//     return Promise.resolve(dispatch({
//         type: MARK_ATTENDANCE,
//         code: code,
//       })).then(() => {
//       attendanceService.attend(code, token)
//       .then((response) => {
//         if (response.status === 200) {
//           console.log("states IS 200 FOLKS");
//           // dispatch({ type: ATTENDANCE_MARKED, code: code });
//           return Promise.resolve(dispatch({ type: ATTENDANCE_MARKED, code: code }));
//         } else {
//           // dispatch({ type: ATTENDACE_FAILED, code: code });
//           return Promise.resolve(dispatch({ type: ATTENDACE_FAILED, code: code }));
//         }
//       });
//     });
//   };
// }

// function markAttendance(code, token) {
//   return (dispatch) => {
//     dispatch({
//       type: MARK_ATTENDANCE,
//       code: code,
//     });
//     attendanceService.attend(code, token).then((response) => {
//       if (response.status === 200) {
//           dispatch({type: ATTENDANCE_MARKED, code:code})

//       } else {
//           dispatch({type: ATTENDACE_FAILED, code:code})
//       }
//       return Promise.resolve(response);
//     });
//   };
// }

function markAttendance(code, token) {
  return (dispatch) => {
    dispatch({
      type: MARK_ATTENDANCE,
      code: code,
    });
    return new Promise((resolve, reject) => {
      attendanceService.attend(code, token).then(
        (response) => {
          console.log(response);
          dispatch({ type: ATTENDANCE_MARKED, code: code });
          resolve(response.data);
        },

        (error) => {
          console.log("original error:")
          console.log("response is:" + JSON.stringify(error.response.data))
          dispatch({ type: ATTENDACE_FAILED, code: code, error: error });
          reject(error)
        }
      );
    });
  };
}
