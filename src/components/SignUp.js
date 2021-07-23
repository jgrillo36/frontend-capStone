import React from 'react';
import Forms from './Forms';
import "../assets/styles.scss";


const signUp = (props) => {

    const {user, setUser,loggedIn, setLoggedIn} = props;

    return <>
    <div className="main-wrapper background">
        <div className="left-side">
            <Forms setUser={setUser} setLoggedIn={setLoggedIn}/>

        </div>
    </div>
        </>
}

export default signUp;
