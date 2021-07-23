import React, {useState, useEffect} from "react";
import "../../assets/styles.scss";
import "../../assets/users.scss";
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { signIn } from "../../actions/users";


const LoginForm = (props) => {
    const dispatch = useDispatch();
    const {setUser, setLoggedIn} = props;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    

    const handleForm = async(e) => {

    e.preventDefault()

    let data = {
            email: email,
            password: password
        }
        dispatch(signIn(data, ()=>{
            history.push("/users")

    }))};

    return <>
<form className="forms forms-grid forms-div" onSubmit={handleForm}>

<div className="row">
    <div className="col-sm-6">

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
                <button className="button">
                    <input type="submit" />
                </button>
            </div>
        </div>
    </div>



    </form>

    </>;
};

export default LoginForm;