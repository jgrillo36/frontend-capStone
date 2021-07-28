import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import products from '../assets/data/storeItemsData'
import {Link, useParams} from 'react-router-dom'
import randomImages from '../assets/data/randomStoreItem'
import {addToCart} from '../actions/cartActions';
import CartItems from './CartItems'
import Footer from './layout/Footer'
import Header2 from './layout/Header2'
import {Modal, Button} from 'react-bootstrap'



const StoreItems = () => {

const { id } = useParams();
const [items, setItems] = useState([])
const products = useSelector(state => state.products.items)
const storeItem = products.filter(item => {
  return item.id == id 
})

const [show, setShow] = useState(false)
const handleClose = () => setShow(false)
const handleShow = () => setShow(true)


console.log("products", products)
console.log("storeItem", storeItem)

// pulling down redux state
// const productsPlaceholder = useSelector(state => state.products.items);
// console.log("product placeholder", productsPlaceholder)

const randomStoreItem1 = randomImages[Math.floor(Math.random()*randomImages.length)];
const randomStoreItem2 = randomImages[Math.floor(Math.random()*randomImages.length)];
const randomStoreItem3 = randomImages[Math.floor(Math.random()*randomImages.length)];
const randomStoreItem4 = randomImages[Math.floor(Math.random()*randomImages.length)];

const totalCosts = useSelector(state => state.cart.totalCost);
const cartItems = useSelector(state => state.cart.cartItems);
const numberOfItems = useSelector(state => state.cart.numberOfItems);


let descriptionOfItem = storeItem.map((description)=>{
  return description.description.toString()
})
console.log("description of item", descriptionOfItem)

let description = descriptionOfItem.join()
console.log("description", description)

let arr = description.split(". ")


let newArr = arr.map((el) =>{
  return <p> {el} </p>
})


  const dispatch = useDispatch();
  useEffect(() =>{
      
    const itemsData = async () =>{
      setItems(products)
    }
    itemsData();

  }, [])

  // console.log("product data", products)
  // console.log("storeItem", storeItem)
  // console.log("id", id)
  // console.log("random image", randomStoreItem1)
  // console.log("random image", randomStoreItem2)
  // console.log("random image", randomStoreItem3)
  // console.log("random image", randomStoreItem4)


  return (
    <>
    
      {storeItem.map((items) =>{
        console.log(items.id)
        return(
        <div className="">
          <div>
            <Header2 />
          </div>

          <div className="row pt-0 m-0">
            <div className="main-item-description-box col-md-6 col-sm-12 d-flex align-items-center justify-content-center flex-column mt-0 pt-0 overflow-hidden">
              <img src={items.image}></img>
            </div>
            <div className="main-item-description-box col-md-6 col-sm-12 align-items-center justify-content-center mt-0 pt-0">
              <div className="itemContent">
                <h3>{items.name}</h3> 
                <p className="fiskerInc-text">by Fisker Inc.</p>
                <p className="price-text"><b>${items.price}.00</b></p> 
                <p className="size-text"><b>SIZE:</b> </p>         
                <button className="cartButton" onClick={()=> dispatch(addToCart(items))}>
                  <p className="button-text"><b>Add To Cart</b></p></button>
                  <br />
                  <br />
                  <p className="description-text">{newArr}</p> 
                  <hr className="hrCart"></hr>
                  <p className="cart-items-text">Your Cart:</p>
                  <p className="cart-items-text">Total Cost: ${totalCosts}.00</p>
                  <div>
                  {cartItems.length === 0 
                    ?
                    <div className="cart-items-text">Cart is empty</div>
                    
                    : 
                    <div className="cart-items-text">
                        You have <em>{numberOfItems}</em> items in the cart
                    </div>
                    }
                  </div>
              <div className="cartMain"> 
                <CartItems />
              </div>
              <br />
              <div>
                <button className="cartButton" onClick={(e)=>{handleShow(e)}}>CheckOut</button>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title className="text-dark"><b>CHECKOUT</b></Modal.Title>
                  </Modal.Header>
                <Modal.Body>
                  <p> Thank you for your purchase of ${totalCosts}. <br />
                  <br />
                  Team Whiskers appreciates your purchase. 
                  <br />
                  <br />
                  Your money will go towards saving stray cats in eastern Bangkok!
                  </p>
                </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
              </div>
            </div>
            <div className="store-item-slide3 col-md-6 col-sm-12 d-flex align-items-center justify-content-center flex-column mt-0 pt-0 overflow-hidden">
              <div className="store-item-slide3-inner">
                <h1>You may also like</h1>
                <hr className="hrslide8store"></hr>
              </div>
            </div>
            <div className= "store-item-slide4 col-md-6 col-sm-12 d-flex overflow-hidden">
              <div className="store-item-slide4">
                <div className="store-item-slide4-inner">
                    <a>
                      {randomStoreItem1}
                    </a>
                </div>
                <div className="store-item-slide4-inner">
                    {randomStoreItem2}
                </div>
              </div>
              <div className="store-item-slide4">
                <div className="store-item-slide4-inner">
                    {randomStoreItem3}
                </div>
                <div className="store-item-slide4-inner">
                    {randomStoreItem4}
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
        
      )
      })}
    </>
  )
}

export default StoreItems