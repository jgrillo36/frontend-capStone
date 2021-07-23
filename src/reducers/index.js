import { combineReducers } from 'redux';

import productReducer from './productReducer';
import cartReducer from './cartReducer';
import userReducer from './userReducer';

const reducer = combineReducers({
  user: userReducer,
  products: productReducer,
  cart: cartReducer
});

export default reducer;
