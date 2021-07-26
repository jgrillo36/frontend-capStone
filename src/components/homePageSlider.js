import React, { Component } from 'react'
import BackgroundSlider from 'react-background-slider'

import slider1 from '../assets/homepagePictures/slider1.jpeg'
import slider2 from '../assets/homepagePictures/slider2.jpeg'
import slider3 from '../assets/homepagePictures/slider3.jpeg'
import slider4 from '../assets/homepagePictures/slider4.jpeg'



class HomepageSlider extends Component{
  render(){
    return(
      <div className="sliderMain">
        <BackgroundSlider
          images={[slider1, slider2, slider3, slider4]}
          duration={5}
          transition={1}
        />
      </div>
    )
  }
}

export default HomepageSlider