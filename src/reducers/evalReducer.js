const initialState = { form: {}, error: "" };

export function templateTrainer(state = initialState, action) {
  switch (action.type) {
    case "GET_TEMPLATE":
      return state;
    case "TEMPLATE_SUCCESS":
      return {
        form: action.form,
        error: "",
      };
    case "TEMPLATE_FAILURE":
      return { form: {}, error: action.error };
    default:
      return state;
  }
}

export function templateJury(state = initialState, action) {
  switch (action.type) {
    case "GET_TEMPLATE_J":
      return state;
    case "TEMPLATE_SUCCESS_J":
      return {
        form: action.form,
        error: "",
      };
    case "TEMPLATE_FAILURE_J":
      return { form: {}, error: action.error };
    default:
      return state;
  }
}

export function templatePeer(state = initialState, action) {
  switch (action.type) {
    case "GET_TEMPLATE_PR":
      return state;
    case "TEMPLATE_SUCCESS_PR":
      return {
        form: action.form,
        error: "",
      };
    case "TEMPLATE_FAILURE_PR":
      return { form: {}, error: action.error };
    default:
      return state;
  }
}

export function criteria(state = [], action) {
  switch (action.type) {
    case "ADD_CRITERION":
      var missing = state.filter(function (criterion) {
        return criterion.CriterionId !== action.criterion.CriterionId;
      });
      missing = [...missing, action.criterion];
      console.log("new critera:");
      console.log(missing);
      return missing;

    case "REFRESH_CRITERIA":
      console.log("using themes to make new criteria list");
      var crit = [];
      console.log(action.themes)
      action.themes.forEach((theme) => {
        theme.criteria.forEach((criterion) => {
          crit = [
            ...crit,
            {
              CriterionId: criterion.id,
              NoteFA: 0,
              comment: "",
            },
          ];
        });
      });
      console.log(JSON.stringify(crit))
      return crit;

    default:
      return state;
  }
}

export function criteriaJury(state = [], action) {
  switch (action.type) {
    case "ADD_CRITERION_J":
      var missing = state.filter(function (criterion) {
        return criterion.CriterionId !== action.criterion.CriterionId;
      });
      missing = [...missing, action.criterion];
      console.log("new critera:");
      console.log(missing);
      return missing;

    case "REFRESH_CRITERIA_J":
      console.log("refreshing jury criteria");
      var crit = [];
      action.themes.forEach((theme) => {
        theme.criteria.forEach((criterion) => {
          crit = [
            ...crit,
            {
              CriterionId: criterion.id,
              NoteFA: 0,
              comment: "",
            },
          ];
        });
      });
      console.log(JSON.stringify(crit))
      return crit;

    default:
      return state;
  }
}

export function criteriaPeer(state = [], action) {
  switch (action.type) {
    case "ADD_CRITERION_PR":
      var missing = state.filter(function (criterion) {
        return criterion.CategoryId !== action.criterion.CategoryId;
      });
      missing = [...missing, action.criterion];
      console.log("new critera:");
      console.log(missing);
      return missing;

    case "REFRESH_CRITERIA_PR":
      console.log("using categories to make new criteria list");
      var crit = [];
      console.log(action.categories)
      action.categories.forEach((category) => {
          crit = [
            ...crit,
            {
              CategoryId: category.id,
              NoteCA: 0,
            },
          ];
      });
      console.log(JSON.stringify(crit))
      return crit;

    default:
      return state;
  }
}
