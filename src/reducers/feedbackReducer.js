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
      if (action.cellType === "text") {
        console.log("text type");
        var missing = state.filter(function (question) {
          return question.QuestionId !== action.answer.QuestionId;
        });
        if (action.answer.AnswerChoice === "") {
          action.answer.Cheked = 0;
        }
        missing = [...missing, action.answer];
        return missing;
      } else {
        var missing = state.filter(function (question) {
          return question.QuestionId !== action.answer.QuestionId;
        });

        var tochange = state.filter(function (question) {
          return question.QuestionId === action.answer.QuestionId;
        });
        tochange.forEach((answer) => {
          if (answer.AnswerChoice === action.answer.AnswerChoice) {
            answer.Cheked = 1;
          } else {
            answer.Cheked = 0;
          }
        });

        missing = [...missing, ...tochange];
        return missing;
      }
    }

    case "REFRESH_ANSWERS_F":
      var crit = [];
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
      return crit;

    default:
      return state;
  }
}
