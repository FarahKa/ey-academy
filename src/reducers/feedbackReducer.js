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

export function selectGroupF(group = {}, action) {
  switch (action.type) {
    case "GROUP_SELECT_F": {
      return action.group;
    }
    case "GROUP_CLEAR_F": {
      return {};
    }
    default:
      return group;
  }
}

export function templateF(state = { form: [], fetching: false }, action) {
  switch (action.type) {
    case "GET_TEMPLATE_F":
      return state;
    case "TEMPLATE_SUCCESS_F":
      return {
        form: action.form,
        error: "",
      };
    case "TEMPLATE_FAILURE_F":
      return { form: [], error: action.error };
    default:
      return state;
  }
}

export function answers(state = [], action) {
  switch (action.type) {
    case "ADD_ANSWER_F": {
      console.log("add answer f");
      if (action.type === "text") {
        console.log("text type");
        var missing = state.filter(function (question) {
          return question.QuestionId !== action.question.QuestionId;
        });
        missing = [...missing, action.question];
        return missing;
      } else {
        var missing = state.filter(function (question) {
          return question.QuestionId !== action.question.QuestionId;
        });

        var tochange = state.filter(function (question) {
          return question.QuestionId === action.question.QuestionId;
        });
        tochange.forEach((answer) => {
          if (answer.AnswerChoice === action.question.AnswerChoice) {
            answer.Cheked = 1;
          } else {
            answer.Cheked = 0;
          }
        });

        missing = [...missing, ...tochange];
        console.log("new answers:");
        console.log(missing);
        return missing;
      }
    }

    case "REFRESH_ANSWERS":
      console.log("using sections to make new answers list");
      var crit = [];
      console.log(action.sections);
      action.sections.forEach((section) => {
        section.questions.forEach((question) => {
          var answers = [
            "Strongly agree",
            "Agree",
            "Disagree",
            "Strongly disagree",
          ];
          if (question.type === "combo") {
            answers.forEach((answer) => {
              crit = [
                ...crit,
                {
                  QuestionId: question.id,
                  AnswerChoice: answer,
                  Cheked: 0,
                },
              ];
            });
          } else {
            crit = [
              ...crit,
              {
                QuestionId: question.id,
                AnswerChoice: "",
                Cheked: 0,
              },
            ];
          }
        });
      });
      console.log(JSON.stringify(crit));
      return crit;

    default:
      return state;
  }
}
