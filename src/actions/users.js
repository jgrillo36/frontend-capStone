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
    const currentUser = {
        firstName: response.data.currentUser.firstName,
        lastName: response.data.currentUser.lastName,
        email: response.data.currentUser.email,
        phoneNumber: response.data.currentUser.phoneNumber
    }
    console.log("response", response)
    dispatch({ type: AUTH_USER, data: {auth: response.data.token, currentUser }});
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