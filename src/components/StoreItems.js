import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {loadProducts} from '../actions/productAction'
import products from '../assets/data/storeItemsData'
import {Link, useParams} from 'react-router-dom'
import {addToCart} from '../actions/cartActions';


const StoreItems = () => {

const { id } = useParams();
const [items, setItems] = useState([])
const dispatch = useDispatch();
const storeItem = products.filter(item => {
  return item.id == id 
})

  useEffect(() =>{
      
    const itemsData = async () =>{
      
      setItems(products)
    }
    itemsData();

  }, [])

  console.log("product data", products)
  console.log("storeItem", storeItem)
  console.log("id", id)



  return (
    <>
      {storeItem.map((items) =>{
        console.log(items.id)
        return(
        <div className="main-content-item">
          <div className="row pt-0 m-0">
            <div className="col-md-6 col-sm-12 d-flex align-items-center justify-content-center flex-column mt-0 pt-0 overflow-hidden">
              <img src={items.image}></img>
            </div>
            <div className="main-item-description-box col-md-6 col-sm-12 d-flex align-items-center justify-content-center flex-column mt-0 pt-0 overflow-hidden">
              <div className="itemContent">
                <h3>{items.title}</h3> 
                <p className="fiskerInc-text">by Fisker Inc.</p>
                <p className="price-text"><b>${items.price}.00 </b></p> 
                <p className="size-text"><b>SIZE:</b> </p> 
                <button className="cartButton" onClick={()=> dispatch(addToCart(items))}>
                  <p className="button-text"><b>Add To Cart</b></p></button>
                  <br />
                  <br />
                  <p className="description-text">{items.description1}</p> 
                  <p className="description-text">{items.description2}</p> 
                  <p className="description-text">{items.description3}</p> 
                  <p className="description-text">{items.description4}</p> 
                  <p className="description-text">{items.description5}</p>
                  <p className="description-text">{items.description6}</p>
                <p className="description-text">*Orders shipped outside of the United States may be subject to import taxes, customs duties, and fees levied by the destination country/region.</p>

              </div>
            </div>
          </div>
        </div>
      )
      })}
    </>
  )
}

export default StoreItems
