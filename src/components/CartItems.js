import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import {formatCurrency} from '../components/utils';
import {removeFromCart} from '../actions/cartActions';
import CheckOut from "./Checkout";

const CartItems = () => {

    const cartItems = useSelector(state => state.cart.cartItems);
    const numberOfItems = useSelector(state => state.cart.numberOfItems);
    const totalCosts = useSelector(state => state.cart.totalCost);
    const dispatch = useDispatch();

  return <>

    <div className="cart-items">
        {cartItems.map(item =>{
            return <div key={item.id} className="cart-items-main">
                <div className="cart-items-inner">
                    <img className="cart-image"src={item.image} alt={item.name} height="165px"/>
                    <p><b>{item.name}</b></p>
                        ${item.price}.00 x {item.count} <br></br>
                        <span className="cart-remove-text">Remove Item: </span><button className="cartItemDeleteButton" onClick={()=> dispatch(removeFromCart(item))}>X</button>
                </div>
            </div>
        })}
    </div>
  </>;
};

export default CartItems;