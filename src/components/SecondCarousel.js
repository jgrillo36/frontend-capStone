import React, {useState} from 'react'
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
        <img
          className="d-block w-100"
          src={FiskerMensT}
          // srcSet={`${FiskerWomensT480} 480w, ${FiskerWomensT720} 720w, ${FiskerWomensT960} 960w, ${FiskerWomensT1440} 1440w, ${FiskerWomensT1920} 1920w`}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={FiskerWomensTShirt}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Sweatshirt}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={FiskerHat}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default StoreCarouselTwo;