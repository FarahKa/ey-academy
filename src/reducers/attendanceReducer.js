const initialState =  { code : '', attending:false, error: '' };

export function attendance(state = initialState, action) {
    switch (action.type) {
      case 'MARK_ATTENDANCE':
        return {
          code:action.code,
          attending: false,
          error:''
        };
      case 'ATTENDANCE_MARKED':
        return {
            code:action.code,
            attending: true,
            error:''
        };
      case 'ATTENDANCE_FAILED':
        return { code : action.code, attending:false, error: action.error };
      default:
        return state
    }
  }