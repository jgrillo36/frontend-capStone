import { LOAD_PRODUCTS } from './types';
import axios from 'axios'

export const loadProducts = () => async dispatch => {
  
    try {
      const response = await axios.get('https://whiskers-backend.herokuapp.com/products/all') ;
      
      dispatch({
        type: LOAD_PRODUCTS, 
        payload: response.data.data
      })
  
    }
    catch(err){
      console.log("error message:", err)
    }
}

const corsOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204,
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers':
      'Origin, X-Requested-With, Content-Type, Accept',
};