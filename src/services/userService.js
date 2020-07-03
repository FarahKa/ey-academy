import axios from 'axios';
import eyAcademy from "../../api/ey-academy";    
import { saveUserToken } from '../actions';
    
    export const userService = {
        login,
    };
    
    
    //login function
    export function login(email, password) {
        eyAcademy
          .post("/users/login", {
            email : email,
            password : password,
          })
          .then((response) => {
            if (response.data.status) {
              console.log(response.data);
              saveUserToken(response.data.token);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      };