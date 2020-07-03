import { AsyncStorage } from "react-native";
import { userConstants } from '../constants';
import { userService } from '../services/userService';


export const userActions = {
  login,
}

export const selectTraining = (training) => {
  // do api stuff
  return {
    type: "TRAINING_SELECTED",
    payload: training,
  };
};

export const getToken = (token) => ({
  type: "GET_TOKEN",
  token,
});

export const saveToken = (token) => ({
  type: "SAVE_TOKEN",
  token,
});

export const removeToken = () => ({
  type: "REMOVE_TOKEN",
});

export const loading = (bool) => ({
  type: "LOADING",
  isLoading: bool,
});

export const error = (error) => ({
  type: "ERROR",
  error,
});

export const getUserToken = () => (dispatch) =>
  AsyncStorage.getItem("userToken")
    .then((data) => {
      dispatch(loading(false));
      dispatch(getToken(data));
    })
    .catch((err) => {
      dispatch(loading(false));
      dispatch(error(err.message || "ERROR"));
    });

export const saveUserToken = (data) => (dispatch) =>
  AsyncStorage.setItem("userToken", "abc")
    .then((data) => {
      dispatch(loading(false));
      dispatch(saveToken("token saved"));
    })
    .catch((err) => {
      dispatch(loading(false));
      dispatch(error(err.message || "ERROR"));
    });

export const removeUserToken = () => (dispatch) =>
  AsyncStorage.removeItem("userToken")
    .then((data) => {
      dispatch(loading(false));
      dispatch(removeToken(data));
    })
    .catch((err) => {
      dispatch(loading(false));
      dispatch(error(err.message || "ERROR"));
    });


    function login(email, password) {
        return dispatch => {
            dispatch(request({ email }));
    
            userService.login(email, password)
                .then(
                    user => { 
                        dispatch(success(user));
                        history.push('/');
                    },
                    error => {
                        dispatch(failure(error.toString()));
                        dispatch(alertActions.error(error.toString()));
                    }
                );
        };
    
        function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
        function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
        function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
    }



