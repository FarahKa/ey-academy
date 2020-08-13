const initialState = { fetching: false, trainings: [] };


export function trainingsF(state = initialState, action) {
  switch (action.type) {
    case "TRAININGS_REQUEST_F":
      return {
        fetching: true,
        trainings: [],
      };
    case "TRAININGS_SUCCESS_F":
      return {
        fetching: false,
        trainings: action.trainings,
      };
    case "TRAININGS_FAILURE_F":
      return { fetching: false, trainings: [], error: action.error };

    default:
      return state;
  }
}

export function selectTrainingF(training = {}, action) {
  switch (action.type) {
    case "TRAINING_SELECT_F": {
      return action.training;
    }
    case "TRAINING_CLEAR_F": {
      return {};
    }
    default:
      return training;
  }
}

export function templateF(state = initialState, action) {
    switch (action.type) {
      case "GET_TEMPLATE_F":
        return state;
      case "TEMPLATE_SUCCESS_F":
        return {
          form: action.form,
          error: "",
        };
      case "TEMPLATE_FAILURE_F":
        return { form: {}, error: action.error };
      default:
        return state;
    }
  }

  export function questions(state = [], action) {
    switch (action.type) {
      case "ADD_QUESTION_F":
        var missing = state.filter(function (question) {
            //CHECK IF ID IS RIGHT
          return question.Id !== action.question.Id;
        });
        missing = [...missing, action.question];
        console.log("new critera:");
        console.log(missing);
        return missing;
  
      case "REFRESH_QUESTIONS":
        console.log("using sections to make new questions list");
        var crit = [];
        console.log(action.sections)
        action.sections.forEach((section) => {
            //TO CHECK DB STUFF
          section.questions.forEach((question) => {
            crit = [
              ...crit,
              {
                Id: question.Id,
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
