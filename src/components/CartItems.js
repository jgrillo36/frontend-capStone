import React from "react";
import {useSelector} from 'react-redux';
import {formatCurrency} from '../components/utils';
import Fade from 'react-reveal/Fade';

const CartItems = () => {

    const cartItems = useSelector(state => state.cart.cartItems);
    const numberOfItems = useSelector(state => state.cart.numberOfItems);
    const totalCosts = useSelector(state => state.cart.totalCosts);

  return <>
    <div>
        {cartItems.length === 0 
            ?
            <div>Cart is empty</div>

            : 
            <div>
                You have <em>{numberOfItems}</em> items in the cart
            </div>
        }
    </div>

        <Fade left cascade>
        <div className="row cart-items">
            {cartItems.map(item =>{
                return <div key={item.id} className="col-12 d-flex flex-column">

                    <div className="d-flex">
                            <div>
                                <img src={item.image} alt={item.title} />
                            </div>

                            <div>
                                {item.title}
                            </div>
                    </div>

                    <div className="">
                        {formatCurrency(item.price)} X {item.count}
                        <button className="btn btn-warning" onClick={()=> dispatch(removeFromCart(product))}>Remove</button>
                    </div>
                </div>
            })}
        </div>
        </Fade>
  </>;
};

export default CartItems;