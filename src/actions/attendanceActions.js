import { attendanceService } from "../services/attendanceService";

export const attendanceActions = {
  markAttendance,
};
const MARK_ATTENDANCE = "MARK_ATTENDANCE";
const ATTENDANCE_MARKED = "ATTENDANCE_MARKED";
const ATTENDACE_FAILED = "ATTENDANCE_FAILED";

function markAttendance(code, token) {
  return function (dispatch) {
    return Promise.resolve(dispatch({
        type: MARK_ATTENDANCE,
        code: code,
      })).then(() => {
      attendanceService.attend(code, token)
      .then((response) => {
        if (response.status === 200) {
          console.log("states IS 200 FOLKS");
          // dispatch({ type: ATTENDANCE_MARKED, code: code });
          return Promise.resolve(dispatch({ type: ATTENDANCE_MARKED, code: code }));
        } else {
          // dispatch({ type: ATTENDACE_FAILED, code: code });
          return Promise.resolve(dispatch({ type: ATTENDACE_FAILED, code: code }));
        }
      });
    });
  };
}
