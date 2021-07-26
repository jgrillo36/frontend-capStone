import React from 'react'
import Header from '../components/layout/Header'
import Header2 from '../components/layout/Header2'
import HomepageSlider from './homePageSlider'
import appStore from '../assets/homepagePictures/AppStore.png'


const Homepage = () => {
  return (
    <>
      <div>
        <Header />
        <div className="slide1-homepage">
              <div className="slide1-homepage-text">
                <p className="ocean-text">O&nbsp;&nbsp;C&nbsp;&nbsp;E&nbsp;&nbsp;A&nbsp;&nbsp;N</p>
                <br />
                <br />
              <div className="slide1-homepage-text-price">
                <div className="text-to-right">
                  <p className="price-homepage-text">$37,499 USD</p> <br />
                  <p className="baseprice-homepage-text">BASE PRICE.<br/> 
                  <p className="taxes-homepage-text">PRIOR TO TAXES & APPLICABLE REBATES</p></p>
                </div>
              </div>
              </div>
        </div>
        <div> 
          <HomepageSlider />
        </div>
        <div className="sliderTextMain">
     
        </div>
        <div className="homepage-video">
          <div className="video-container">
            <iframe src="https://player.vimeo.com/video/472314125?background=1" className="homepage-video" width="100%" frameborder="0" allow="autoplay"></iframe>
            <div className="homepage-video-topText">
            <p>WE MAKE THIS SUSTAINABILITY THING LOOK GOOD. </p>
            </div>
            <div className="homepage-video-bottomText">
            <p>Form follows function into the Ocean, with thoughtfully luxurious spaces crafted from recycled materials and comfortable seating for five adults. Hop in. </p>
            </div>
          </div>
        </div>
        <div className="homepage-phoneSlide">
        </div>
            <div className="homepage-brownbox"> 
              <div className="homepage-brownbox-text">
                <h1> EVEN OUR LEASE IS HIGH DESIGN</h1> <br />
                <p className="brownbox-smaller-text">Come as you are. Go as you please. Our Fisker Flexee Lease moves with you, doing away with long-term commitments. We remove the stress of restrictive limits with a 30,000 mile annual driving allowance. You are free to take the Ocean where you please and return it when you please. Zero penalties. No, that's not a typo. Zero. Zip. Zilch.</p>
                <div>
                <a href="https://apps.apple.com/us/app/fisker-flexee/id1486002675"><img src={appStore} height="45px"></img></a> &nbsp;
                <a href='https://play.google.com/store/apps/details?id=com.fisker.fiskerapp&hl=en_US&gl=US&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img alt='Get it on Google Play' height="66px" src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'/></a>
                </div>
              </div>
            </div>
            <div> 
            <div className="lastSlide-homepage">
              <div className="lastSlide-homepage-text">
                <p className="ocean-text">O&nbsp;&nbsp;C&nbsp;&nbsp;E&nbsp;&nbsp;A&nbsp;&nbsp;N</p>
                <br />
                <br />
              <div className="lastSlide-homepage-text-price">
                <p>Beautifully considered for all.</p>
                <p>Planned production starting 2022.</p>
              
              </div>
              </div>
        </div>

            </div>
      </div>
    </>
  )
}

export default Homepage
