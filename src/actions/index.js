
export * from './userActions';

export * from './attendanceActions';

export * from './trainingActions';

export * from './evalActions';

export const selectTraining = (training) => {
  // do api stuff
  return {
    type: "TRAINING_SELECTED",
    payload: training,
  };
};


// export const getUserToken = () => (dispatch) =>
//   AsyncStorage.getItem("userToken")
//     .then((data) => {
//       dispatch(loading(false));
//       dispatch(getToken(data));
//     })
//     .catch((err) => {
//       dispatch(loading(false));
//       dispatch(error(err.message || "ERROR"));
//     });




