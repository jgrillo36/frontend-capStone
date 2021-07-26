import { v4 as uuidv4 } from 'uuid';
import item1pic from '../storePictures/FiskerCropTop_1920.jpeg'
import item2pic from '../storePictures/Crewneck_2100.jpeg'
import item1picSmaller from '../storePictures/FiskerCropTop_960.jpeg'
import item2picSmaller from '../storePictures/Crewneck_1100.jpeg'

let products = [
  {
    id: 1,
    image: `${item1picSmaller}`,
    title: "Women's Crop Street T",
    description: [
      {
      description1:
        "Sustainably Made – 100% Organic Cotton.",
      description2:
        "Fabrics are knitted and dyed in Los Angeles.",
      description3:
        "Fabric travels less than 5 miles for production of the goods",
      description4:
        "G.O.T.S. Certified",
      description5:
        "",
      description6:
        "",
      }],
    availableSizes: [ 
      {
      XS: "XS", 
      S: "S",
      M: "M",
      L:"L"
      }
      ],
    price: 30.00,
  },
  {
    id: 2,
    image: `${item2picSmaller}`,
    title: "Eco-Friendly Street Crewneck",
    description: [
      {
        description1:
        "100% Recycled Cotton.",
        description2:
        "99.5% Biodegradable. 14 oz. 100% Recycled Cotton Fleece. Made from reclaimed US-grown cotton manufacturing waste.",
        description3:
        "Made in Los Angeles, California.",
      description4:
        "G.O.T.S. Certified",
      description5:
        "Circular Manufacturer",
      description6:
        "Closed Loop Factory",
      }],
    availableSizes: [ 
      {
      XL: "XL", 
      S: "S",
      M: "M",
      L:"L"
      }
      ],
    price: 89.00,
  },
  {
    id: 3,
    image: `${item2picSmaller}`,
    title: "Eco-Friendly Street Crewneck",
    description1:
    "100% Recycled Cotton.",
    description2:
    "99.5% Biodegradable. 14 oz. 100% Recycled Cotton Fleece. Made from reclaimed US-grown cotton manufacturing waste.",
    description3:
    "Made in Los Angeles, California.",
  description4:
    "G.O.T.S. Certified",
  description5:
    "Circular Manufacturer",
  description6:
    "Closed Loop Factory",
      
    availableSizes: ["X", "M", "L"],
    price: 89.00,
  },
  {
    id: 4,
    image: `${item2picSmaller}`,
    title: "Eco-Friendly Street Crewneck",
    description1:
      "This is for all the latest trends, no matter who you are, where you're from and what you're up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.",
    availableSizes: ["X", "M", "L"],
    price: 89.00,
  },
  {
    id: 5,
    image: `${item2picSmaller}`,
    title: "Eco-Friendly Street Crewneck",
    description1:
      "This is for all the latest trends, no matter who you are, where you're from and what you're up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.",
    availableSizes: ["X", "M", "L"],
    price: 89.00,
  }
]

export default products;