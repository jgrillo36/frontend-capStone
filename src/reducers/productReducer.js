import {LOAD_PRODUCTS} from '../actions/types';

const productReducer = (state, action) => {
    
    if(state == null){
        state = {
            items: []
        }
    }

    switch(action.type){

        case LOAD_PRODUCTS:
            return {
                ...state, 
                items: action.payload
            }

        default:
            return state;
    }
}

export default productReducer;