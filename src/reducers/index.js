import { combineReducers } from "redux";
import eyAcademy from "../../api/ey-academy";

//#region initial trainings

const initialState = {
  trainings: [
    {
        title: "Formation 1",
        groups: [
          {
            group: "Group 1",
            members: [
              { id: "1", name: "Foulen Falten" },
              { id: "2", name: "Foulen Falten" },
              { id: "3", name: "Foulen Falten" },
              { id: "4", name: "Foulen Falten" },
              { id: "5", name: "Foulen Falten" },
              { id: "6", name: "Foulen Falten" },
              { id: "7", name: "Foulen Falten" },
              { id: "8", name: "Foulen Falten" },
            ],
          },
          {
            group: "Group 2",
            members: [
              {
                id: "1",
                name: "Foulen Falten",
                image: "../../assets/placeholder.jpg",
              },
              {
                id: "2",
                name: "Foulen Falten",
                image: "../../assets/placeholder.jpg",
              },
              {
                id: "3",
                name: "Foulen Falten",
                image: "../../assets/placeholder.jpg",
              },
              {
                id: "4",
                name: "Foulen Falten",
                image: "../../assets/placeholder.jpg",
              },
              {
                id: "5",
                name: "Foulen Falten",
                image: "../../assets/placeholder.jpg",
              },
            ],
          },
          {
            group: "Group 3",
            members: [
              {
                id: "1",
                name: "Foulen Falten",
                image: "../../assets/placeholder.jpg",
              },
              {
                id: "2",
                name: "Foulen Falten",
                image: "../../assets/placeholder.jpg",
              },
              {
                id: "3",
                name: "Foulen Falten",
                image: "../../assets/placeholder.jpg",
              },
              {
                id: "4",
                name: "Foulen Falten",
                image: "../../assets/placeholder.jpg",
              },
              {
                id: "5",
                name: "Foulen Falten",
                image: "../../assets/placeholder.jpg",
              },
            ],
          },
          {
            group: "Group 4",
            members: [
              {
                id: "1",
                name: "Foulen Falten",
                image: "../../assets/placeholder.jpg",
              },
              {
                id: "2",
                name: "Foulen Falten",
                image: "../../assets/placeholder.jpg",
              },
              {
                id: "3",
                name: "Foulen Falten",
                image: "../../assets/placeholder.jpg",
              },
              {
                id: "4",
                name: "Foulen Falten",
                image: "../../assets/placeholder.jpg",
              },
              {
                id: "5",
                name: "Foulen Falten",
                image: "../../assets/placeholder.jpg",
              },
            ],
          },
          {
            group: "Group 5",
            members: [
              {
                id: "1",
                name: "Foulen Falten",
                image: "../../assets/placeholder.jpg",
              },
              {
                id: "2",
                name: "Foulen Falten",
                image: "../../assets/placeholder.jpg",
              },
              {
                id: "3",
                name: "Foulen Falten",
                image: "../../assets/placeholder.jpg",
              },
              {
                id: "4",
                name: "Foulen Falten",
                image: "../../assets/placeholder.jpg",
              },
              {
                id: "5",
                name: "Foulen Falten",
                image: "../../assets/placeholder.jpg",
              },
            ],
          },
          {
            group: "Group 6",
            members: [
              {
                id: "1",
                name: "Foulen Falten",
                image: "../../assets/placeholder.jpg",
              },
              {
                id: "2",
                name: "Foulen Falten",
                image: "../../assets/placeholder.jpg",
              },
              {
                id: "3",
                name: "Foulen Falten",
                image: "../../assets/placeholder.jpg",
              },
              {
                id: "4",
                name: "Foulen Falten",
                image: "../../assets/placeholder.jpg",
              },
              {
                id: "5",
                name: "Foulen Falten",
                image: "../../assets/placeholder.jpg",
              },
            ],
          },
        ],
      
    },
    {
        title: "Formation 2",
        groups: [
          {
            group: "Group 1",
            members: [
              { id: "1", name: "Foulen Falten" },
              { id: "2", name: "Foulen Falten" },
              { id: "3", name: "Foulen Falten" },
              { id: "4", name: "Foulen Falten" },
              { id: "5", name: "Foulen Falten" },
              { id: "6", name: "Foulen Falten" },
              { id: "7", name: "Foulen Falten" },
              { id: "8", name: "Foulen Falten" },
            ],
          },
          {
            group: "Group 2",
            members: [
              {
                id: "1",
                name: "Foulen Falten",
                image: "../../assets/placeholder.jpg",
              },
              {
                id: "2",
                name: "Foulen Falten",
                image: "../../assets/placeholder.jpg",
              },
              {
                id: "3",
                name: "Foulen Falten",
                image: "../../assets/placeholder.jpg",
              },
              {
                id: "4",
                name: "Foulen Falten",
                image: "../../assets/placeholder.jpg",
              },
              {
                id: "5",
                name: "Foulen Falten",
                image: "../../assets/placeholder.jpg",
              },
            ],
          },
          {
            group: "Group 3",
            members: [
              {
                id: "1",
                name: "Foulen Falten",
                image: "../../assets/placeholder.jpg",
              },
              {
                id: "2",
                name: "Foulen Falten",
                image: "../../assets/placeholder.jpg",
              },
              {
                id: "3",
                name: "Foulen Falten",
                image: "../../assets/placeholder.jpg",
              },
              {
                id: "4",
                name: "Foulen Falten",
                image: "../../assets/placeholder.jpg",
              },
              {
                id: "5",
                name: "Foulen Falten",
                image: "../../assets/placeholder.jpg",
              },
            ],
          },
          {
            group: "Group 4",
            members: [
              {
                id: "1",
                name: "Foulen Falten",
                image: "../../assets/placeholder.jpg",
              },
              {
                id: "2",
                name: "Foulen Falten",
                image: "../../assets/placeholder.jpg",
              },
              {
                id: "3",
                name: "Foulen Falten",
                image: "../../assets/placeholder.jpg",
              },
              {
                id: "4",
                name: "Foulen Falten",
                image: "../../assets/placeholder.jpg",
              },
              {
                id: "5",
                name: "Foulen Falten",
                image: "../../assets/placeholder.jpg",
              },
            ],
          },
          {
            group: "Group 5",
            members: [
              {
                id: "1",
                name: "Foulen Falten",
                image: "../../assets/placeholder.jpg",
              },
              {
                id: "2",
                name: "Foulen Falten",
                image: "../../assets/placeholder.jpg",
              },
              {
                id: "3",
                name: "Foulen Falten",
                image: "../../assets/placeholder.jpg",
              },
              {
                id: "4",
                name: "Foulen Falten",
                image: "../../assets/placeholder.jpg",
              },
              {
                id: "5",
                name: "Foulen Falten",
                image: "../../assets/placeholder.jpg",
              },
            ],
          },
        ],
    },
  ],
};


const trainingReducer = (state, action) => {
  if (typeof state === "undefined") {
    return initialState;
  }

  // For now, don't handle any actions
  // and just return the state given to us.
  return state;
};

//#endregion

const selectedTrainingReducer = (selectedTraining = null, action) => {
  if (action.type === "TRAINING_SELECTED") {
    return action.payload;
  }
  return selectedTraining;
};

const testApiReducer = (state, action) => {
  // try {
  //   const response = await eyAcademy.get("/activities");
  //   console.log("in testapi");
  //   return Array.from(response.data);
  // } catch (err) {
  //   console.log(err);
  //   setError("Something went wrong");
  //   return state;
  // }
  return [{ test: "test" }];
};


const rootReducer = (
  state = {
    token: {},
    loading: true,
    error: null,
  },
  action
) => {
  switch (action.type) {
    case "GET_TOKEN":
      return { ...state, token: action.token };
    case "SAVE_TOKEN":
      return { ...state, token: action.token };
    case "REMOVE_TOKEN":
      return { ...state, token: action.token };
    case "LOADING":
      return { ...state, loading: action.isLoading };
    case "ERROR":
      return { ...state, error: action.error };
    default:
      return state;
  }
};



export default combineReducers({
  token: rootReducer,
  testApi: testApiReducer,
  trainings: trainingReducer,
  selectedTraining: selectedTrainingReducer,
});
