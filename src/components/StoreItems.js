import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import products from '../assets/data/storeItemsData'
import {Link, useParams} from 'react-router-dom'
import randomImages from '../assets/data/randomStoreItem'
import Footer from './layout/Footer'



const StoreItems = () => {

const { id } = useParams();
const [items, setItems] = useState([])
const products = useSelector(state => state.products.items)
const storeItem = products.filter(item => {
  return item.id == id 
})

// pulling down redux state
// const productsPlaceholder = useSelector(state => state.products.items);
// console.log("product placeholder", productsPlaceholder)

const randomStoreItem1 = randomImages[Math.floor(Math.random()*randomImages.length)];
const randomStoreItem2 = randomImages[Math.floor(Math.random()*randomImages.length)];
const randomStoreItem3 = randomImages[Math.floor(Math.random()*randomImages.length)];
const randomStoreItem4 = randomImages[Math.floor(Math.random()*randomImages.length)];


let descriptionOfItem = storeItem.map((description)=>{
  return description.description.toString()
})
console.log("description of item", descriptionOfItem)

let description = descriptionOfItem.join()
console.log("description", description)

let arr = description.split(". ")
let output = ""

let newArr = arr.map((el) =>{
  return <p> {el} </p>
})

// for (let i = 0; i < arr.length; i++){
//   arr[i] = <p> {arr[i]} </p>
// }

// arr = arr.join("")
// console.log("arr", arr)



// arr.forEach(lineOfText =>{
//   output  += `${lineOfText}` + ""  
// })

// let output1 = `${arr[0]}. \n\n${arr[0]}.`

// console.log("output", output)


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
        <div className="main-content-item">
          <div className="row pt-0 m-0">
            <div className="col-md-6 col-sm-12 d-flex align-items-center justify-content-center flex-column mt-0 pt-0 overflow-hidden">
              <img src={items.image}></img>
            </div>
            <div className="main-item-description-box col-md-6 col-sm-12 d-flex align-items-center justify-content-center flex-column mt-0 pt-0 overflow-hidden">
              <div className="itemContent">
                <h3>{items.name}</h3> 
                <p className="fiskerInc-text">by Fisker Inc.</p>
                <p className="price-text"><b>${items.price}.00 </b></p> 
                <p className="size-text"><b>SIZE: {items.size}</b> </p> 
                <button className="cartButton">
                  <p className="button-text"><b>Add To Cart</b></p></button>
                  <br />
                  <br />
                  <p className="description-text">{newArr}</p> 

                  
                <p className="description-text">*Orders shipped outside of the United States may be subject to import taxes, customs duties, and fees levied by the destination country/region.</p>

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
