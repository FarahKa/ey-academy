import { combineReducers } from "redux";
import {attendance} from './attendanceReducer';
import {authentication} from './authenticationReducer';
import {trainings, selectGroup, trainingsJury, selectGroupJury} from './trainingReducer';
import {templateTrainer, criteria, templateJury, criteriaJury} from './evalReducer';
import {loading} from './loadingReducer';

//#region initial trainings

// const initialState = {
//   trainings: [
//     {
//         title: "Formation 1",
//         groups: [
//           {
//             group: "Group 1",
//             members: [
//               { id: "1", name: "Foulen Falten" },
//               { id: "2", name: "Foulen Falten" },
//               { id: "3", name: "Foulen Falten" },
//               { id: "4", name: "Foulen Falten" },
//               { id: "5", name: "Foulen Falten" },
//               { id: "6", name: "Foulen Falten" },
//               { id: "7", name: "Foulen Falten" },
//               { id: "8", name: "Foulen Falten" },
//             ],
//           },
//           {
//             group: "Group 2",
//             members: [
//               {
//                 id: "1",
//                 name: "Foulen Falten",
//                 image: "../../assets/placeholder.jpg",
//               },
//               {
//                 id: "2",
//                 name: "Foulen Falten",
//                 image: "../../assets/placeholder.jpg",
//               },
//               {
//                 id: "3",
//                 name: "Foulen Falten",
//                 image: "../../assets/placeholder.jpg",
//               },
//               {
//                 id: "4",
//                 name: "Foulen Falten",
//                 image: "../../assets/placeholder.jpg",
//               },
//               {
//                 id: "5",
//                 name: "Foulen Falten",
//                 image: "../../assets/placeholder.jpg",
//               },
//             ],
//           },
//           {
//             group: "Group 3",
//             members: [
//               {
//                 id: "1",
//                 name: "Foulen Falten",
//                 image: "../../assets/placeholder.jpg",
//               },
//               {
//                 id: "2",
//                 name: "Foulen Falten",
//                 image: "../../assets/placeholder.jpg",
//               },
//               {
//                 id: "3",
//                 name: "Foulen Falten",
//                 image: "../../assets/placeholder.jpg",
//               },
//               {
//                 id: "4",
//                 name: "Foulen Falten",
//                 image: "../../assets/placeholder.jpg",
//               },
//               {
//                 id: "5",
//                 name: "Foulen Falten",
//                 image: "../../assets/placeholder.jpg",
//               },
//             ],
//           },
//           {
//             group: "Group 4",
//             members: [
//               {
//                 id: "1",
//                 name: "Foulen Falten",
//                 image: "../../assets/placeholder.jpg",
//               },
//               {
//                 id: "2",
//                 name: "Foulen Falten",
//                 image: "../../assets/placeholder.jpg",
//               },
//               {
//                 id: "3",
//                 name: "Foulen Falten",
//                 image: "../../assets/placeholder.jpg",
//               },
//               {
//                 id: "4",
//                 name: "Foulen Falten",
//                 image: "../../assets/placeholder.jpg",
//               },
//               {
//                 id: "5",
//                 name: "Foulen Falten",
//                 image: "../../assets/placeholder.jpg",
//               },
//             ],
//           },
//           {
//             group: "Group 5",
//             members: [
//               {
//                 id: "1",
//                 name: "Foulen Falten",
//                 image: "../../assets/placeholder.jpg",
//               },
//               {
//                 id: "2",
//                 name: "Foulen Falten",
//                 image: "../../assets/placeholder.jpg",
//               },
//               {
//                 id: "3",
//                 name: "Foulen Falten",
//                 image: "../../assets/placeholder.jpg",
//               },
//               {
//                 id: "4",
//                 name: "Foulen Falten",
//                 image: "../../assets/placeholder.jpg",
//               },
//               {
//                 id: "5",
//                 name: "Foulen Falten",
//                 image: "../../assets/placeholder.jpg",
//               },
//             ],
//           },
//           {
//             group: "Group 6",
//             members: [
//               {
//                 id: "1",
//                 name: "Foulen Falten",
//                 image: "../../assets/placeholder.jpg",
//               },
//               {
//                 id: "2",
//                 name: "Foulen Falten",
//                 image: "../../assets/placeholder.jpg",
//               },
//               {
//                 id: "3",
//                 name: "Foulen Falten",
//                 image: "../../assets/placeholder.jpg",
//               },
//               {
//                 id: "4",
//                 name: "Foulen Falten",
//                 image: "../../assets/placeholder.jpg",
//               },
//               {
//                 id: "5",
//                 name: "Foulen Falten",
//                 image: "../../assets/placeholder.jpg",
//               },
//             ],
//           },
//         ],
      
//     },
//     {
//         title: "Formation 2",
//         groups: [
//           {
//             group: "Group 1",
//             members: [
//               { id: "1", name: "Foulen Falten" },
//               { id: "2", name: "Foulen Falten" },
//               { id: "3", name: "Foulen Falten" },
//               { id: "4", name: "Foulen Falten" },
//               { id: "5", name: "Foulen Falten" },
//               { id: "6", name: "Foulen Falten" },
//               { id: "7", name: "Foulen Falten" },
//               { id: "8", name: "Foulen Falten" },
//             ],
//           },
//           {
//             group: "Group 2",
//             members: [
//               {
//                 id: "1",
//                 name: "Foulen Falten",
//                 image: "../../assets/placeholder.jpg",
//               },
//               {
//                 id: "2",
//                 name: "Foulen Falten",
//                 image: "../../assets/placeholder.jpg",
//               },
//               {
//                 id: "3",
//                 name: "Foulen Falten",
//                 image: "../../assets/placeholder.jpg",
//               },
//               {
//                 id: "4",
//                 name: "Foulen Falten",
//                 image: "../../assets/placeholder.jpg",
//               },
//               {
//                 id: "5",
//                 name: "Foulen Falten",
//                 image: "../../assets/placeholder.jpg",
//               },
//             ],
//           },
//           {
//             group: "Group 3",
//             members: [
//               {
//                 id: "1",
//                 name: "Foulen Falten",
//                 image: "../../assets/placeholder.jpg",
//               },
//               {
//                 id: "2",
//                 name: "Foulen Falten",
//                 image: "../../assets/placeholder.jpg",
//               },
//               {
//                 id: "3",
//                 name: "Foulen Falten",
//                 image: "../../assets/placeholder.jpg",
//               },
//               {
//                 id: "4",
//                 name: "Foulen Falten",
//                 image: "../../assets/placeholder.jpg",
//               },
//               {
//                 id: "5",
//                 name: "Foulen Falten",
//                 image: "../../assets/placeholder.jpg",
//               },
//             ],
//           },
//           {
//             group: "Group 4",
//             members: [
//               {
//                 id: "1",
//                 name: "Foulen Falten",
//                 image: "../../assets/placeholder.jpg",
//               },
//               {
//                 id: "2",
//                 name: "Foulen Falten",
//                 image: "../../assets/placeholder.jpg",
//               },
//               {
//                 id: "3",
//                 name: "Foulen Falten",
//                 image: "../../assets/placeholder.jpg",
//               },
//               {
//                 id: "4",
//                 name: "Foulen Falten",
//                 image: "../../assets/placeholder.jpg",
//               },
//               {
//                 id: "5",
//                 name: "Foulen Falten",
//                 image: "../../assets/placeholder.jpg",
//               },
//             ],
//           },
//           {
//             group: "Group 5",
//             members: [
//               {
//                 id: "1",
//                 name: "Foulen Falten",
//                 image: "../../assets/placeholder.jpg",
//               },
//               {
//                 id: "2",
//                 name: "Foulen Falten",
//                 image: "../../assets/placeholder.jpg",
//               },
//               {
//                 id: "3",
//                 name: "Foulen Falten",
//                 image: "../../assets/placeholder.jpg",
//               },
//               {
//                 id: "4",
//                 name: "Foulen Falten",
//                 image: "../../assets/placeholder.jpg",
//               },
//               {
//                 id: "5",
//                 name: "Foulen Falten",
//                 image: "../../assets/placeholder.jpg",
//               },
//             ],
//           },
//         ],
//     },
//     {
//       title: "Formation 3",
//       groups: [
//         {
//           group: "Group 1",
//           members: [
//             { id: "1", name: "Foulen Falten" },
//             { id: "2", name: "Foulen Falten" },
//             { id: "3", name: "Foulen Falten" },
//             { id: "4", name: "Foulen Falten" },
//             { id: "5", name: "Foulen Falten" },
//             { id: "6", name: "Foulen Falten" },
//             { id: "7", name: "Foulen Falten" },
//             { id: "8", name: "Foulen Falten" },
//           ],
//         },
//         {
//           group: "Group 2",
//           members: [
//             {
//               id: "1",
//               name: "Foulen Falten",
//               image: "../../assets/placeholder.jpg",
//             },
//             {
//               id: "2",
//               name: "Foulen Falten",
//               image: "../../assets/placeholder.jpg",
//             },
//             {
//               id: "3",
//               name: "Foulen Falten",
//               image: "../../assets/placeholder.jpg",
//             },
//             {
//               id: "4",
//               name: "Foulen Falten",
//               image: "../../assets/placeholder.jpg",
//             },
//             {
//               id: "5",
//               name: "Foulen Falten",
//               image: "../../assets/placeholder.jpg",
//             },
//           ],
//         },
//         {
//           group: "Group 3",
//           members: [
//             {
//               id: "1",
//               name: "Foulen Falten",
//               image: "../../assets/placeholder.jpg",
//             },
//             {
//               id: "2",
//               name: "Foulen Falten",
//               image: "../../assets/placeholder.jpg",
//             },
//             {
//               id: "3",
//               name: "Foulen Falten",
//               image: "../../assets/placeholder.jpg",
//             },
//             {
//               id: "4",
//               name: "Foulen Falten",
//               image: "../../assets/placeholder.jpg",
//             },
//             {
//               id: "5",
//               name: "Foulen Falten",
//               image: "../../assets/placeholder.jpg",
//             },
//           ],
//         },
//         {
//           group: "Group 4",
//           members: [
//             {
//               id: "1",
//               name: "Foulen Falten",
//               image: "../../assets/placeholder.jpg",
//             },
//             {
//               id: "2",
//               name: "Foulen Falten",
//               image: "../../assets/placeholder.jpg",
//             },
//             {
//               id: "3",
//               name: "Foulen Falten",
//               image: "../../assets/placeholder.jpg",
//             },
//             {
//               id: "4",
//               name: "Foulen Falten",
//               image: "../../assets/placeholder.jpg",
//             },
//             {
//               id: "5",
//               name: "Foulen Falten",
//               image: "../../assets/placeholder.jpg",
//             },
//           ],
//         },
//         {
//           group: "Group 5",
//           members: [
//             {
//               id: "1",
//               name: "Foulen Falten",
//               image: "../../assets/placeholder.jpg",
//             },
//             {
//               id: "2",
//               name: "Foulen Falten",
//               image: "../../assets/placeholder.jpg",
//             },
//             {
//               id: "3",
//               name: "Foulen Falten",
//               image: "../../assets/placeholder.jpg",
//             },
//             {
//               id: "4",
//               name: "Foulen Falten",
//               image: "../../assets/placeholder.jpg",
//             },
//             {
//               id: "5",
//               name: "Foulen Falten",
//               image: "../../assets/placeholder.jpg",
//             },
//           ],
//         },
//       ],
//   },
//   ],
// };
//#endregion

// const trainingReducer = (state, action) => {
//   if (typeof state === "undefined") {
//     return initialState;
//   }

//   // For now, don't handle any actions
//   // and just return the state given to us.
//   return state;
// };


export default combineReducers({
  templateTrainer: templateTrainer,
  templateJury:templateJury,
  authentication:authentication,
  trainings: trainings,
  selectGroup: selectGroup,
  selectGroupJury:selectGroupJury,
  trainingsJury:trainingsJury,
  attendance:attendance,
  criteria:criteria,
  criteriaJury:criteriaJury,
  loading:loading
});
