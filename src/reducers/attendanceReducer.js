const initialState =  { code : '', attending:false };

export function attendance(state = initialState, action) {
    switch (action.type) {
      case 'MARK_ATTENDANCE':
        return {
          code:action.code,
          attending: false
        };
      case 'ATTENDANCE_MARKED':
        return {
            code:action.code,
            attending: true
        };
      case 'ATTENDANCE_FAILED':
        return { code : action.code, attending:false };
      default:
        return state
    }
  }