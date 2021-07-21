import React from 'react';
import "../assets/styles.scss";
import "../assets/users.scss";
import LoginForm from './layout/LoginForm';


const Login = (props) => {

    const {user, setUser,loggedIn, setLoggedIn} = props;

    return <>
    <div className="main-wrapper background">
        <div className="left-side">
            <div class="page-content page-container" id="page-content">
                <div class="padding">
                    <div class="row container d-flex justify-content-center">
                        <div class="col-xl-6 col-md-12">
                            <div class="card user-card-full">
                                <div class="row m-l-0 m-r-0">
                                    <div class="col-sm-8">
                                        <div class="card-block">
                                            <h3>Login</h3>
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

        </>
}

export default Login;
