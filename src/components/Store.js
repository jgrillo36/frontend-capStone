
import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import slide3pic600 from '../assets/storePictures/slide3-600.jpeg'
import slide3pic860 from '../assets/storePictures/slide3-860.jpeg'
import slide3pic960 from '../assets/storePictures/slide3-960.jpeg'
import slide3pic1440 from '../assets/storePictures/slide3-1440.jpeg'
import slide3pic1920 from '../assets/storePictures/slide3-1920.jpeg'
import slide5pic960 from '../assets/storePictures/Slide5pic960.jpeg'
import CarouselOne from './FirstCarousel'
import CarouselTwo from './SecondCarousel'
import fiskerText from '../assets/Fisker_logo_white.png'
import Footer from './layout/Footer'
import {loadProducts} from '../actions/products'



const Store = () => {

  const dispatch = useDispatch()

  useEffect(() =>{
    dispatch(loadProducts());
  }, [])
  
  return (
    <div className="main-content-wrapper">
      <div className="slide1store">

        <iframe src="https://player.vimeo.com/video/567578136?background=1" width="100%" height="700px" frameborder="0" allow="autoplay"></iframe>
      </div>
      <div className="slide2store">
        <div className="slide2store-inner">
          <h3> <b>Welcome to Fisker Edition</b> </h3>
        </div>
      </div>
      <div className="row ps-light pt-0 m-0">
        <div className="col-md-6 col-sm-12 d-flex align-items-center justify-content-center overflow-hidden">
          <img src={slide3pic600} srcSet={`${slide3pic600} 480w, ${slide3pic860} 720w, ${slide3pic960} 960w, ${slide3pic1440} 1440w, ${slide3pic1920} 1920w`} ></img>
        </div>
        <div className="col-md-6 col-sm-12 d-flex align-items-center justify-content-center flex-column mt-0 pt-0 overflow-hidden">
          <div className="slide4-store-inner">
            <h3>Shop the look</h3>
              <CarouselOne />
          </div>
        </div>
      </div>
      <div className="row ps-light pt-0 m-0">
        <div className="col-md-6 col-sm-12 d-flex align-items-center justify-content-center overflow-hidden">
          <img src={slide5pic960} srcSet=""></img>
        </div>
        <div className="col-md-6 col-sm-12 d-flex align-items-center justify-content-center flex-column mt-0 pt-0 overflow-hidden">
          <div className="slide4-store-inner">
            <h3>Shop the look</h3>
              <CarouselTwo />
          </div>
        </div>
      </div>
      <div className="row ps-light pt-0 m-0">
        <div className="slide7store col-md-6 col-sm-12 d-flex align-items-center justify-content-center flex-column mt-0 pt-0 overflow-hidden">
          <div className="slide7store-inner">
            <div className="slide7store-innerText">
            <h3> Continue Exploring.</h3>
            </div>
          </div>
        </div>
          <div className="slide8store col-md-6 col-sm-12 d-flex align-items-center justify-content-center flex-column mt-0 pt-0 overflow-hidden">
            <h3>Beautifully considered for all.</h3>
            <hr className="hrslide8store"></hr>
            <br></br>
            <br></br>
            <p className="p-slide8-store">How we move through the world matters.</p>

            <p className="p-slide8-store">At Fisker, we want to inspire you to move more beautifully, with greater consideration for all.</p>

            <p className="p-slide8-store">We’re here to weave emotion and sustainability into everything we make.</p>
            
            <p className="p-slide8-store">We’re here to reimagine not only how we move through the world, but our place within it.</p>
          </div>
        </div>
        <Footer />
    </div>

  )};

export default Store;
