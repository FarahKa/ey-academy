import { combineReducers } from "redux";
import eyAcademy from "../../api/ey-academy";

// const currentUser = (state, action) => {
//   if(action.type==)
// }

const trainingReducer = (state, action) => {
  return [
    {
      title: "Formation 1",
      groups: [
        { group: "Group 1",
        members: [
          { id:'1', name: "Foulen Falten"},
          { id:'2', name: "Foulen Falten" },
          { id:'3', name: "Foulen Falten" },
          { id:'4', name: "Foulen Falten"},
          { id:'5', name: "Foulen Falten"},
          { id:'6', name: "Foulen Falten" },
          { id:'7', name: "Foulen Falten"},
          { id:'8', name: "Foulen Falten"},
        ], },
        { group: "Group 2",
        members: [
          { id:'1', name: "Foulen Falten", image: "../../assets/placeholder.jpg" },
          { id:'2', name: "Foulen Falten", image: "../../assets/placeholder.jpg" },
          { id:'3', name: "Foulen Falten", image: "../../assets/placeholder.jpg" },
          { id:'4', name: "Foulen Falten", image: "../../assets/placeholder.jpg" },
          { id:'5', name: "Foulen Falten", image: "../../assets/placeholder.jpg" },
        ], },
        { group: "Group 3",
        members: [
          { id:'1', name: "Foulen Falten", image: "../../assets/placeholder.jpg" },
          { id:'2', name: "Foulen Falten", image: "../../assets/placeholder.jpg" },
          { id:'3', name: "Foulen Falten", image: "../../assets/placeholder.jpg" },
          { id:'4', name: "Foulen Falten", image: "../../assets/placeholder.jpg" },
          { id:'5', name: "Foulen Falten", image: "../../assets/placeholder.jpg" },
        ], },
        { group: "Group 4",
        members: [
          { id:'1', name: "Foulen Falten", image: "../../assets/placeholder.jpg" },
          { id:'2', name: "Foulen Falten", image: "../../assets/placeholder.jpg" },
          { id:'3', name: "Foulen Falten", image: "../../assets/placeholder.jpg" },
          { id:'4', name: "Foulen Falten", image: "../../assets/placeholder.jpg" },
          { id:'5', name: "Foulen Falten", image: "../../assets/placeholder.jpg" },
        ], },
        { group: "Group 5",
        members: [
          { id:'1', name: "Foulen Falten", image: "../../assets/placeholder.jpg" },
          { id:'2', name: "Foulen Falten", image: "../../assets/placeholder.jpg" },
          { id:'3', name: "Foulen Falten", image: "../../assets/placeholder.jpg" },
          { id:'4', name: "Foulen Falten", image: "../../assets/placeholder.jpg" },
          { id:'5', name: "Foulen Falten", image: "../../assets/placeholder.jpg" },
        ], },
        { group: "Group 6",
        members: [
          { id:'1', name: "Foulen Falten", image: "../../assets/placeholder.jpg" },
          { id:'2', name: "Foulen Falten", image: "../../assets/placeholder.jpg" },
          { id:'3', name: "Foulen Falten", image: "../../assets/placeholder.jpg" },
          { id:'4', name: "Foulen Falten", image: "../../assets/placeholder.jpg" },
          { id:'5', name: "Foulen Falten", image: "../../assets/placeholder.jpg" },
        ], },
        { group: "Group 7",
        members: [
          { id:'1', name: "Foulen Falten", image: "../../assets/placeholder.jpg" },
          { id:'2', name: "Foulen Falten", image: "../../assets/placeholder.jpg" },
          { id:'3', name: "Foulen Falten", image: "../../assets/placeholder.jpg" },
          { id:'4', name: "Foulen Falten", image: "../../assets/placeholder.jpg" },
          { id:'5', name: "Foulen Falten", image: "../../assets/placeholder.jpg" },
        ], },
        { group: "Group 8",
        members: [
          { id:'1', name: "Foulen Falten", image: "../../assets/placeholder.jpg" },
          { id:'2', name: "Foulen Falten", image: "../../assets/placeholder.jpg" },
          { id:'3', name: "Foulen Falten", image: "../../assets/placeholder.jpg" },
          { id:'4', name: "Foulen Falten", image: "../../assets/placeholder.jpg" },
          { id:'5', name: "Foulen Falten", image: "../../assets/placeholder.jpg" },
        ], },
        { group: "Group 9",
        members: [
          { id:'1', name: "Foulen Falten", image: "../../assets/placeholder.jpg" },
          { id:'2', name: "Foulen Falten", image: "../../assets/placeholder.jpg" },
          { id:'3', name: "Foulen Falten", image: "../../assets/placeholder.jpg" },
          { id:'4', name: "Foulen Falten", image: "../../assets/placeholder.jpg" },
          { id:'5', name: "Foulen Falten", image: "../../assets/placeholder.jpg" },
        ], },
        { group: "Group 10",
        members: [
          { id:'1', name: "Foulen Falten", image: "../../assets/placeholder.jpg" },
          { id:'2', name: "Foulen Falten", image: "../../assets/placeholder.jpg" },
          { id:'3', name: "Foulen Falten", image: "../../assets/placeholder.jpg" },
          { id:'4', name: "Foulen Falten", image: "../../assets/placeholder.jpg" },
          { id:'5', name: "Foulen Falten", image: "../../assets/placeholder.jpg" },
        ], },
      ],
    },
    {
      title: "Formation 2",
      groups: [
        { group: "Group 1" },
        { group: "Group 2" },
        { group: "Group 3" },
        { group: "Group 4" },
        { group: "Group 5" },
        { group: "Group 6" },
        { group: "Group 7" },
        { group: "Group 8" },
        { group: "Group 9" },
        { group: "Group 10" },
      ],
    },
    {
      title: "Formation 3",
      groups: [
        {
          group: "Group 1",
          members: [
            { id:'1', name: "Foulen Falten", image: "../../assets/placeholder.jpg" },
            { id:'2', name: "Foulen Falten", image: "../../assets/placeholder.jpg" },
            { id:'3', name: "Foulen Falten", image: "../../assets/placeholder.jpg" },
            { id:'4', name: "Foulen Falten", image: "../../assets/placeholder.jpg" },
            { id:'5', name: "Foulen Falten", image: "../../assets/placeholder.jpg" },
          ],
        },
        { group: "Group 2",
        members: [
          { id:'1', name: "Foulen Falten", image: "../../assets/placeholder.jpg" },
          { id:'2', name: "Foulen Falten", image: "../../assets/placeholder.jpg" },
          { id:'3', name: "Foulen Falten", image: "../../assets/placeholder.jpg" },
          { id:'4', name: "Foulen Falten", image: "../../assets/placeholder.jpg" },
          { id:'5', name: "Foulen Falten", image: "../../assets/placeholder.jpg" },
        ], },
        { group: "Group 3",
        members: [
          { id:'1', name: "Foulen Falten", image: "../../assets/placeholder.jpg" },
          { id:'2', name: "Foulen Falten", image: "../../assets/placeholder.jpg" },
          { id:'3', name: "Foulen Falten", image: "../../assets/placeholder.jpg" },
          { id:'4', name: "Foulen Falten", image: "../../assets/placeholder.jpg" },
          { id:'5', name: "Foulen Falten", image: "../../assets/placeholder.jpg" },
        ], },
        { group: "Group 4",
        members: [
          { id:'1', name: "Foulen Falten", image: "../../assets/placeholder.jpg" },
          { id:'2', name: "Foulen Falten", image: "../../assets/placeholder.jpg" },
          { id:'3', name: "Foulen Falten", image: "../../assets/placeholder.jpg" },
          { id:'4', name: "Foulen Falten", image: "../../assets/placeholder.jpg" },
          { id:'5', name: "Foulen Falten", image: "../../assets/placeholder.jpg" },
        ], },
        { group: "Group 5",
        members: [
          { id:'1', name: "Foulen Falten", image: "../../assets/placeholder.jpg" },
          { id:'2', name: "Foulen Falten", image: "../../assets/placeholder.jpg" },
          { id:'3', name: "Foulen Falten", image: "../../assets/placeholder.jpg" },
          { id:'4', name: "Foulen Falten", image: "../../assets/placeholder.jpg" },
          { id:'5', name: "Foulen Falten", image: "../../assets/placeholder.jpg" },
        ], },
        { group: "Group 6" },
        { group: "Group 7" },
        { group: "Group 8" },
        { group: "Group 9" },
        { group: "Group 10" },
      ],
    },
    {
      title: "Formation 4",
      groups: [
        { group: "Group 1" },
        { group: "Group 2" },
        { group: "Group 3" },
        { group: "Group 4" },
        { group: "Group 5" },
        { group: "Group 6" },
        { group: "Group 7" },
        { group: "Group 8" },
        { group: "Group 9" },
        { group: "Group 10" },
      ],
    },
    {
      title: "Formation 5",
      groups: [
        { group: "Group 1" },
        { group: "Group 2" },
        { group: "Group 3" },
        { group: "Group 4" },
        { group: "Group 5" },
        { group: "Group 6" },
        { group: "Group 7" },
        { group: "Group 8" },
        { group: "Group 9" },
        { group: "Group 10" },
      ],
    },
    {
      title: "Formation 6",
      groups: [
        { group: "Group 1" },
        { group: "Group 2" },
        { group: "Group 3" },
        { group: "Group 4" },
        { group: "Group 5" },
        { group: "Group 6" },
        { group: "Group 7" },
        { group: "Group 8" },
        { group: "Group 9" },
        { group: "Group 10" },
      ],
    },
    {
      title: "Formation 7",
      groups: [
        { group: "Group 1" },
        { group: "Group 2" },
        { group: "Group 3" },
        { group: "Group 4" },
        { group: "Group 5" },
        { group: "Group 6" },
        { group: "Group 7" },
        { group: "Group 8" },
        { group: "Group 9" },
        { group: "Group 10" },
      ],
    },
  ];
};

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

export default combineReducers({
  testApi: testApiReducer,
  trainings: trainingReducer,
  selectedTraining: selectedTrainingReducer,
});
