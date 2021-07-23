import { AUTH_USER } from "../actions/types"

const INITIAL_STATE = {
    currentUser: {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: ""
    },    
    auth: ""
}

const userReducer = (state = INITIAL_STATE, action) => {
    
    switch(action.type){
        case AUTH_USER: 
            return {
                ...state,
                currentUser: action.data.currentUser,
                auth: action.data.auth
            }
        default: 
            return state
    }
}

export default userReducer;