import { attendanceService } from "../services/attendanceService";

export const attendanceActions = {
  markAttendance,
};
const MARK_ATTENDANCE = "MARK_ATTENDANCE";
const ATTENDANCE_MARKED = "ATTENDANCE_MARKED";

function markAttendance(code, token) {
  return (dispatch) => {
    dispatch({
      type: MARK_ATTENDANCE,
      code: code,
    });
    attendanceService.attend(code, token).then((response) => {
      if (response.status === 200) {
          dispatch({type: ATTENDANCE_MARKED, code:code})
      } else {
          dispatch({type: ATTENDACE_FAILED, code:code})
      }
    });
  };
}
