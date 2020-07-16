import { trainingConstants } from "../reducers/trainingReducer";
import { trainingService } from "../services/trainingsService";

export const trainingActions = {
  getTrainings,
  selectGroup,
  clearGroup
};

function getTrainings(userId) {
  return (dispatch) => {
    dispatch({
      type: trainingConstants.TRAININGS_REQUEST,
    });
    return new Promise((resolve, reject) => {
      trainingService.getTrainings(userId).then(
        (trainings) => {
          dispatch({
            type: trainingConstants.TRAININGS_SUCCESS,
            trainings: trainings,
          });
          resolve(trainings);
        },
        (error) => {
          console.log(error);
          dispatch({ type: trainingConstants.TRAININGS_FAILED, error: error });
          reject(error);
        }
      );
    });
  };
}

function selectGroup(group) {
  return (dispatch) => {
    dispatch({
      type: trainingConstants.TRAINING_GROUP_SELECT,
      group: group
    });
  };
}

function clearGroup() {
  return (dispatch) => {
    dispatch({
      type: trainingConstants.TRAINING_GROUP_CLEAR
    });
  };
}
//   const trainings = response.data;
//   const array;
//   trainings.forEach(training =>       {
//     console.log(training);
//     eyAcademy.get(`/training/listGroupFormer/${training.id}`).then(
//       (response) => {
//         training.group= response.data;
//         return training;
//       },
//       (error) => {
//         console.log(error);
//         training.group=response.data;
//         return training;
//       }
//     ).then((training) => {array.push(training)});
//    })

//   // trainings = trainings.map((training) => {
//   //   console.log(training);
//   //   eyAcademy.get(`/training/listGroupFormer/${training.id}`).then(
//   //     (response) => {
//   //       training = { ...training, groups: response.data.groups };
//   //       return training;
//   //     },
//   //     (error) => {
//   //       console.log(error);
//   //       training = { ...training, groups: [] };
//   //       return training;
//   //     }
//   //   );
//   // });
//   // console.log(trainings);
//   return trainings;
// },
// (error) => error
// );
