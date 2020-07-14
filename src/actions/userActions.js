import { userConstants } from "../constants";
import { userService } from "../services/userService";
import { AsyncStorage } from "react-native";

export const userActions = {
  login,
  logout,
};

// export const login = (email, password) => (dispatch, getState) =>
//   Promise.resolve().then(() => {
//     return (dispatch) => {
//       dispatch(request({ email: email }));

//       userService.login(email, password).then(
//         (user) => {
//           console.log(user);
//           AsyncStorage.setItem("user", JSON.stringify(user));
//           dispatch(success(user));
//         },
//         (error) => {
//           console.log(error.toString());
//           dispatch(failure(error.toString()));
//           //dispatch(alertActions.error(error.toString()));
//         }
//       );
//     };

//     function request(user) {
//       return { type: userConstants.LOGIN_REQUEST, user };
//     }
//     function success(user) {
//       return { type: userConstants.LOGIN_SUCCESS, user };
//     }
//     function failure(error) {
//       return { type: userConstants.LOGIN_FAILURE, error };
//     }
//   });

// function login(email, password) {
//     return (dispatch) => {
//       dispatch(request({ email: email }));

//       userService.login(email, password).then(
//         (user) => {
//           console.log(user);
//           AsyncStorage.setItem("user", JSON.stringify(user));
//           dispatch(success(user));
//         },
//         (error) => {
//           console.log(error.toString());
//           dispatch(failure(error.toString()));
//           //dispatch(alertActions.error(error.toString()));
//         }
//       );
//     };

//     function request(user) {
//       return { type: userConstants.LOGIN_REQUEST, user };
//     }
//     function success(user) {
//       return { type: userConstants.LOGIN_SUCCESS, user };
//     }
//     function failure(error) {
//       return { type: userConstants.LOGIN_FAILURE, error };
//     }
//   }

function login(email, password) {
  return (dispatch) => {
    dispatch(request({ email: email }));
    return new Promise((resolve, reject) => {
      userService.login(email, password).then(
        (user) => {
          console.log(user);
          AsyncStorage.setItem("user", JSON.stringify(user));
          dispatch(success(user));
          resolve(user);
        },
        (error) => {
          console.log("AAAAAAAAAAAAAAAAAA"+ error);
          dispatch(failure(error.toString()));
          reject(error.toString());
          //dispatch(alertActions.error(error.toString()));
        }
      );
    });
  };

  function request(user) {
    return { type: userConstants.LOGIN_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error };
  }
}

function logout() {
  userService.logout();
  return { type: userConstants.LOGOUT };
}
