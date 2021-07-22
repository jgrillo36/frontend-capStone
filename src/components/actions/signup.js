import React from 'react';
import Forms from '../Forms';
import "../../assets/styles.scss";


const signUp = (props) => {

    const {user, setUser,loggedIn, setLoggedIn} = props;

    return <>
    <div className="main-wrapper background">
        <div className="left-side">
        <div className="register-text">
                    Join the Fisker
                    <br />
                    mailing list today!
                    <br />
                    <div className="register-alt-text-a">
                        Have a Fisker Account? 
                        <span><a href="/users">Sign in</a></span>
                    </div>
                    <br />
                    <div className="register-alt-text">All-electric. Zero-emissions.</div>
                    <br></br>
            <div class="page-content page-container" id="page-content">
                    <div class="padding">
                        <div class="row container d-flex justify-content-center">
                            <div class="col-xl-6 col-md-12">
                                <div class="card user-card-full">
                                    <div class="row m-l-0 m-r-0">
                                        <div class="col-sm-8">
                                            <div class="card-block">
                                                <h3>Sign up</h3>
                                                    {/* <Forms user={user} loggedIn={loggedIn} setUser={setUser} setLoggedIn={setLoggedIn}/> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
        </div>
    </div>
        </>
}

export default signUp;
