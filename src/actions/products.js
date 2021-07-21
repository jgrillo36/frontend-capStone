import { LOAD_PRODUCTS } from './types';
import axios from 'axios'

export const loadProducts = () => async dispatch => {
  
    try {
      const response = await axios.get('/products/all');
      console.log(response);
      
    //   dispatch({
    //     type: "AUTH_USER", 
    //     data: response.data.token
    //   })
  
    }
    catch(err){
      console.log("error message:", err)
    }
}