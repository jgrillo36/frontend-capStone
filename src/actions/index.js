import actionTypes from './actionTypes';
import axios from "axios"


/**
 * Refistration Action
 */

export const signUp = (formData, cb) => async dispatch =>{
  
  try{
    console.log("formData", formData)

    // take formdata: email, password
    //call our server API
    let response = await axios.post('/register', formData)

    console.log("response token", response.data.token)
    //wait for an authentication token
    //call reducer to store token 

    dispatch({
      type: "AUTH_USER", 
      data: response.data.token
    })

    cb()

  }
  catch(err){
    console.log("error message", err)
  }

}

/**
 * Login Action
 */

export const signIn = (formData, cb) => async dispatch=>{
  try{
    // make an API call to /login
    let response = await axios.post("/login", formData)

    dispatch({
      type: "AUTH_USER",
      data: response.data.token
    })

    cb()
  }
  catch(err){

  }
}

/**
 * Logout Action
 */

export const signOut = (cb) => dispatch => {
  
  dispatch({
    type: "AUTH_USER",
    data: ""
  })

  cb();


}



