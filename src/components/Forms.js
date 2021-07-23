import React, {useState, useEffect} from "react";
import "../assets/styles.scss";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {signUp } from '../actions/users';



const Forms = (props) => {
    const dispatch = useDispatch();
    const {setUser, setLoggedIn} = props;

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
//   const [isValid, setIsValid] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    

    const handleForm = async(e) => {

    e.preventDefault()

    let data = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            phoneNumber: phoneNumber
        }
    dispatch(signUp(data, ()=>{
        history.push("/users")
    }))
    // const response = await fetch('https://whiskers-backend.herokuapp.com/users/newuser', {
    //     method: "POST",
    //     headers: {"Content-Type" : "application/json"},
    //     body: JSON.stringify(data)
    // })

    // console.log(response)
    // const receivedData = await response.json();
    // console.log(receivedData)
        // setLoggedIn(true)
        setFirstName("")
        setLastName("")
        setEmail("")
        setPassword("")
        setPhoneNumber("")

    }

    return <>


    <form className="" onSubmit={handleForm}>
        <div className="main-wrapper background">
            <div className="left-side">
            <div className="page-content page-container" id="page-content">
        <div className="padding">
            <div className="row container d-flex justify-content-center">
                <div className="col-xl-6 col-md-12">
                    <div className="card user-card-full">
                        <div className="row m-l-0 m-r-0">
                            <div className="col-sm-4 bg-c-lite-green user-profile">
                                <div className="card-block text-center text-white">                            
                                    <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                                </div>
                            </div>
                            <div className="col-sm-8">
                                <div className="card-block">
                                    <p className="register-alt-text f-w-600">Join the Fisker</p>
                                    <p className="register-alt-text f-w-600">Mailing list today!</p>
                                    <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Already have a Fisker account?<span>...<Link to="/login">Sign in</Link></span></h6>
                                    <br />
                                    <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Sign up now!</h6>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <input className="user-profile input" type="text" value={firstName} onChange={(e)=>setFirstName(e.target.value)} placeholder="First Name"/>
                                        </div>
                                        <br />
                                        <div className="col-sm-6">
                                            <input className="user-profile input" type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)} placeholder="Last Name"/>
                                        </div>
                                        <br />
                                        <div className="col-sm-6">
                                            <input className="user-profile input" type="integer" value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} placeholder="Mobile phone"/>
                                        </div>
                                        <br />
                                        <div className="col-sm-6">
                                            <input className="user-profile input" type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="e-mail address"/>
                                        </div>
                                        <br />
                                        <div className="col-sm-6">
                                            <input className="user-profile input" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="password"/>
                                        </div>
                                        <br />
                                        <div className="col-sm-6">
                                            {/* <p class="m-b-6 f-w-600">Phone Number</p> */}
                                            <button className="button" type="submit">
                                                Submit
                                            </button>
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
        </div>



        {/* <input type="text" value={firstName} onChange={(e)=>setFirstName(e.target.value)} placeholder="First Name"/> */}

        {/* <input className="forms forms-grid forms-bgd" type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)} placeholder="Last Name"/>

        <input className="forms forms-grid forms-bgd" type="integer" value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} placeholder="Mobile phone"/> */}

        {/* <input className="forms forms-grid forms-bgd" type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="e-mail address"/> */}

        {/* <input className="forms forms-grid forms-bgd" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="password"/> */}

        {/* <button className="button, input, optgroup, select, textarea">
            <input className="forms  forms-bgd" type="submit" />
        </button> */}
    </form>

    </>;
};

export default Forms;