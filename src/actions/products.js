import { LOAD_PRODUCTS } from './types';
import axios from 'axios'

export const loadProducts = () => async dispatch => {
  
    try {
      const response = await axios.get('/products/all');
      
      dispatch({
        type: LOAD_PRODUCTS, 
        payload: response.data.data
      })
  
    }
    catch(err){
      console.log("error message:", err)
    }
}