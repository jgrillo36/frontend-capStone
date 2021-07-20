import React from 'react';
import Forms from '../Forms';
import "../../assets/styles.scss"

const signUp = () => {


    return <>
    <div className="main-wrapper background">

    <div className="left-side">
            <image src="../../assets/Fisker_logo_white.png" alt="Fisker logo"></image>
            <div className="register register-box">
                <div className="register-text">
                    Join the Whisker
                    <br />
                    mailing list today!
                    <br />
                    <div className="register-alt-text-a">
                        Have a Whisker Account? 
                        <span><a href="/signin">Sign in</a></span>
                    </div>
                    <br />
                    <div className="register-alt-text">All-electric. Zero-emissions.</div>
                    <br></br>
                    <div className="forms">
                        <div className="forms-grid">
                    <Forms />
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    </div>
        </>
}

export default signUp;
