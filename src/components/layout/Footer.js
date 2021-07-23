import React from 'react'
import {Link} from 'react-router-dom'
import "../../assets/css.css"
import fiskerText from '../../assets/Fisker_logo_white.png'


const Footer = () => {
  return (
    <>
      <div className="row pt-0 m-0">
          <div className="footer col-md-6 col-sm-12 d-flex align-items-center justify-content-center flex-column mt-0 pt-0">
              <img className="links-image-footer" src={fiskerText} />
            <div className="links-footer">
              <Link className="link-style" to="/about">About</Link> <br/>
              <Link className="link-style" to="/store">Store</Link> <br/>
              <Link className="link-style" to="/register">Register</Link> <br/>
              <Link className="link-style" to="/login">Login</Link> <br/>
                    
          </div>
        </div>
          <div className="footer col-md-6 col-sm-12 d-flex align-items-center justify-content-center flex-column mt-0 pt-0 overflow-hidden">
          <div className="footerSocials">
            <p className="opacityText"> <b> FIND US ON SOCIAL</b></p>
            <div className="socialIcons">
              <a href="https://www.twitter.com/Fiskerinc/"><img src="https://img.icons8.com/ios-glyphs/30/ffffff/twitter--v1.png"/></a>
              <a href="https://www.facebook.com/Fiskerinc/"><img src="https://img.icons8.com/ios-glyphs/30/ffffff/facebook-new.png"/ ></a>
              <a href="https://www.instagram.com/Fiskerinc/"><img src="https://img.icons8.com/windows/32/ffffff/instagram-new.png"/></a>
              <a href="https://www.linkedin.com/company/fiskerinc/"><img src="https://img.icons8.com/ios-glyphs/30/ffffff/linkedin.png"/></a>
              <br></br>
              <br></br>
              <br></br>
              <p className="copyright-text"><a href="https://www.fiskerinc.com/legal/merch-terms-of-sale"><u>Terms of Sale</u></a></p>

              <p className="copyright-text" >Copyright © 2021 Whiskers.</p>
            </div>
          </div>
          </div>
        </div>
    </>
  )
}

export default Footer
