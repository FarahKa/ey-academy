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

  export function templateJury(state = initialState, action) {
    switch (action.type) {
      case "GET_TEMPLATE_J":
        return state;
      case "TEMPLATE_SUCCESS_J":
        return {
            form: action.form,
            error:''
        };
      case "TEMPLATE_FAILURE_J":
        return { form: {}, error:action.error };
      default:
        return state
    }
  }

  export function criteria(state = [], action) {
    switch(action.type){
      case "ADD_CRITERION" :
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

  export function criteriaJury(state = [], action) {
    switch(action.type){
      case "ADD_CRITERION_J" :
        var missing = state.filter(function(criterion) {
          return criterion.CriterionId !== action.criterion.CriterionId;
        });
        missing = [...missing, action.criterion];
        console.log("new critera:")
        console.log(missing);
        return missing;

      case "REFRESH_CRITERIA_J" :
        console.log("emptying criteria");
        return [];

        default:
          return state;
    }
  }