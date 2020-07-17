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


  export function criteria(state = [], action) {
    switch(action.type){
      case "ADD_CRITERION" :
        console.log(action.criterion);
        var missing = state.filter(function(criterion) {
          return criterion.CriterionId !== action.criterion.CriterionId;
        });
        missing = [...missing, action.criterion];
        console.log("new critera:")
        console.log(missing);
        return missing;

      case "REFRESH_CRITERIA" :
        console.log("emptying criteria");
        return [];

        default:
          return state;
    }
  }