import {ADD_TO_CART} from '../actions/types';
import {REMOVE_FROM_CART} from '../actions/types';

const cartReducer = (state, action) => {
  if (state == null) {
    state = {
        cartItems: [],
        numberOfItems: 0,
        totalCost: parseFloat(0.00)
    };
  }

  switch (action.type) { //action.product

    case ADD_TO_CART:

        let newCartItems = [...state.cartItems];
        let isFound = false;

        newCartItems.forEach(product =>{
            if(product.id === action.product.id){
                product.count++;
                isFound = true;
            }
        })

        if(!isFound){
            newCartItems.push({...action.product, count:1})
        }


        return {
            ...state,
            cartItems: newCartItems,
            numberOfItems: state.numberOfItems + 1,
            totalCost: state.totalCost + parseFloat(action.product.price)
        }


    case REMOVE_FROM_CART:
        let oldCartItems = [...state.cartItems];
        const newCart = oldCartItems.filter(product => product.id !== product.id);
    
        return {
            ...state,
            cartItems: newCart,
            numberOfItems: state.numberOfItems - 1,
            totalCost: state.totalCost - parseFloat(action.product.price)
            
        }


    default:
      return state;
  }
};

export default cartReducer