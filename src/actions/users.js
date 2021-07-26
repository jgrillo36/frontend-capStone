import axios from "axios";
import { AUTH_USER } from "./types";
export const signUp = (formData, cbRedirect) => async (dispatch) => {

  try {
    const response = await axios.post("/users/newuser", formData, {
        headers: { 'Content-Type': 'application/json', 
        // "Access-Control-Allow-Origin": "*", 
        // "Accept": "application/json" 
    }});
    console.log(response)
    delete formData.password
    dispatch({ type: AUTH_USER, data: {auth: response.data.token, currentUser: formData }});
    cbRedirect();
  } catch (err) {
console.log(err)
  }
};
export const signIn = (formData, cbRedirect) => async (dispatch) => {
  try {
    const response = await axios.post("/users/login", formData, {
        headers: { 'Content-Type': 'application/json', 
    // "Access-Control-Allow-Origin": "*", 
    // "Accept": "application/json" 
    }});
    console.log('response', response)
    const currentUser = {
        firstName: response.data.firstName,
        lastName: response.data.lastName,
        email: response.data.email,
        phoneNumber: response.data.phoneNumber
    }
console.log("current user", currentUser)
    dispatch({ type: AUTH_USER, data: {auth: true, currentUser: currentUser }});
    cbRedirect();
  } catch (err) {

  }
};
export const signOut = (cbRedirect) => (dispatch) => {
  dispatch({
    type: AUTH_USER,
    data: "",
  });
  cbRedirect();
};