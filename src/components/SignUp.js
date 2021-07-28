import React, {useState, useEffect} from "react";
// import "../assets/styles.scss";
import "../assets/users.scss";
import "../assets/forms.scss";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {signUp } from '../actions/users';
import Header2 from "./layout/Header2";
import Footer from "./layout/Footer";



const SignUp = (props) => {
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
        setLoggedIn(true)
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
    <Header2 />

    <div className="main-wrapper background">
    <br />
    <br />
        <div className="left-side">
            <div className="form-padding">
                <p className="register-alt-text f-w-600">Join the Fisker</p>
                <p className="register-alt-text f-w-600">Mailing list today!</p>
                    <h6 className="m-b-10 f-w-600 register-alt-text-a">Already have a Fisker account?<span>...<Link to="/login" className="register-alt-text">Sign in</Link></span></h6>

                <form className="forms forms-grid forms-div" onSubmit={handleForm}>
                <div className="row">
                    <div className="col-md-12">
                        <input className="user-profile input" type="text" value={firstName} onChange={(e)=>setFirstName(e.target.value)} placeholder="First Name"/>
                    </div>
                </div>
                    <br />
                <div className="col-md-12">
                    <input className="user-profile input" type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)} placeholder="Last Name"/>
                </div>
                    <br />
                <div className="col-md-12">
                    <input className="user-profile input" type="integer" value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} placeholder="Mobile phone"/>
                </div>
                    <br />
                <div className="col-md-12">
                    <input className="user-profile input" type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="e-mail address"/>
                </div>
                    <br />
                <div className="col-md-12">
                    <input className="user-profile input" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="password"/>
                </div>
                    <br />
                <div className="col-md-12">
                    <button className="button" type="submit">
                        Submit
                    </button>
                </div>

            </form>
</div>
</div>
</div>



 <Footer />

   

    </>;
};

export default SignUp;