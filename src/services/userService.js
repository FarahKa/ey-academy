
import eyAcademy from "../../api/ey-academy";
import { AsyncStorage } from "react-native";

export const userService = {
  login,
  logout,
};

//login function
export function login(email, password) {
  eyAcademy
    .post("/user/login", {
      email: email,
      password: password,
    })
    .then((response) => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      
      if(response.status !== 200){
        if (response.status === 401) {
          // auto logout if 401 response returned from api
          logout();
          console.log("connection failure with 401")
          //location.reload(true);
        }
        console.log("connection failure")
        const error = response.statusText;
        return Promise.reject(error);
      } else {
      console.log("connection success");
      user=response.data;
      console.log(user);
      AsyncStorage.setItem("user", JSON.stringify(user));
      return user;
      }
    });
}

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
        location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}

function logout() {
  // remove user from local storage to log user out
  AsyncStorage.removeItem('user');
}

// const saveUserToken = (data) => (dispatch) =>
// AsyncStorage.setItem("userToken", "abc")
//   .then((data) => {
//     dispatch(actions.loading(false));
//     dispatch(actions.saveToken("token saved"));
//   })
//   .catch((err) => {
//     dispatch(actions.loading(false));
//     //dispatch(error(err.message || "ERROR"));
//   });
