const initialState =  { form : {}, error: '' };

export function templateTrainer(state = initialState, action) {
    switch (action.type) {
      case "GET_TEMPLATE":
        return state;
      case "TEMPLATE_SUCCESS":
        return {
            form: action.form,
            error:''
        };
      case "TEMPLATE_FAILURE":
        return { form: {}, error:action.error };
      default:
        return state
    }
  }