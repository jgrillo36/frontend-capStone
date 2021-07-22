import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel'
import FiskerMensT from '../assets/storePictures/FiskerMensT_480.jpeg'
import FiskerWomensTShirt from '../assets/storePictures/FiskerWomensT-Shirt_480.jpeg'
import Sweatshirt from '../assets/storePictures/Sweatshirt_480.jpeg'
import FiskerHat from '../assets/storePictures/FiskerHat_480.jpeg'


const StoreCarouselTwo = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <Link to="/store/5"> 
        <img
          className="d-block w-100"
          src={FiskerMensT}
          // srcSet={`${FiskerWomensT480} 480w, ${FiskerWomensT720} 720w, ${FiskerWomensT960} 960w, ${FiskerWomensT1440} 1440w, ${FiskerWomensT1920} 1920w`}
          alt="First slide"
          />
          </Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link to="store/6">
        <img
          className="d-block w-100"
          src={FiskerWomensTShirt}
          alt="Second slide"
          />
          </Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link to="store/7">
        <img
          className="d-block w-100"
          src={Sweatshirt}
          alt="Third slide"
          />
        </Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link  to="store/8">
        <img
          className="d-block w-100"
          src={FiskerHat}
          alt="Third slide"
          />
        </Link>
      </Carousel.Item>
    </Carousel>
  );
}

export default StoreCarouselTwo;