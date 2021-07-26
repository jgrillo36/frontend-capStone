import React from 'react';
import "../assets/styles.scss";
import "../assets/users.scss";
import LoginForm from './layout/LoginForm';
import Footer from './layout/Footer'


const Login = (props) => {

    const {user, setUser,loggedIn, setLoggedIn} = props;

    return <>
    <div>

        <div className="main-wrapper background">
            <div className="left-side">
                <div class="page-content page-container" id="page-content">
                    <div class="padding">
                        <div class="row container d-flex justify-content-center">
                            <div class="col-xl-6 col-md-12">
                                <div class="card-signup user-card-full">
                                    <div class="row m-l-0 m-r-0">
                                        <div class="col-sm-8">
                                            <div class="card-block">
                                                <p className="register-alt-text">Login</p>
                                                <LoginForm user={user} loggedIn={loggedIn} setUser={setUser} setLoggedIn={setLoggedIn}/>
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
        {/* <Footer /> */}
    </div>
        </>
}

export default Login;
