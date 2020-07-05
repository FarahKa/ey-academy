import { userConstants } from '../constants';
import { userService } from '../services/userService';


export const userActions = {
    login,
    logout
};

function login(email, password) {
    return dispatch => {
        dispatch(request({ email : email }));

        userService.login(email, password)
            .then(
                user => { 
                    //console.log(user);
                    dispatch(success(user));
                },
                error => {
                    console.log(error.toString());
                    dispatch(failure(error.toString()));
                    //dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}