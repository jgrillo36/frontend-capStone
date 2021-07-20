import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel'
import FiskerWomensT from '../assets/storePictures/FiskerCropTop_480.jpeg'
// import FiskerWomensT720 from '../assets/storePictures/FiskerCropTop_720.jpeg'
// import FiskerWomensT960 from '../assets/storePictures/FiskerCropTop_960.jpeg'
// import FiskerWomensT1440 from '../assets/storePictures/FiskerCropTop_1440.jpeg'
// import FiskerWomensT1920 from '../assets/storePictures/FiskerCropTop_1920.jpeg'
import Crewneck from '../assets/storePictures/Crewneck_480.jpeg'
import Sweatpants from '../assets/storePictures/Sweatpants_480.jpeg'
import FiskerMask from '../assets/storePictures/FiskerMask_480.jpeg'


const StoreCarouselOne = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <Link to="/store/1">
        <img
          className="d-block w-100"
          src={FiskerWomensT}
          alt="First slide"
        />
        </Link>
      </Carousel.Item>
      <Carousel.Item>
      <Link to="/store/2">
        <img
          className="d-block w-100"
          src={Crewneck}
          alt="Second slide"
        />
      </Link>
      </Carousel.Item>
      <Carousel.Item>
      <Link to="/store/3">
        <img
          className="d-block w-100"
          src={Sweatpants}
          alt="Third slide"
        />
      </Link>
      </Carousel.Item>
      <Carousel.Item>
      <Link to="/store/4">
        <img
          className="d-block w-100"
          src={FiskerMask}
          alt="Fourth slide"
        />
      </Link>
      </Carousel.Item>
    </Carousel>
  );
}

export default StoreCarouselOne;