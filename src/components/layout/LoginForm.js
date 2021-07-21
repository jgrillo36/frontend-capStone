import React, {useState, useEffect} from "react";
import "../../assets/styles.scss";
import "../../assets/users.scss";
import { useHistory } from "react-router-dom";


const LoginForm = (props) => {

    const {setUser, setLoggedIn} = props;

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
//   const [isValid, setIsValid] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState();
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

    const response = await fetch('http://localhost:3001/users/newuser', {
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify(data)
    })


    const receivedData = await response.json();
        setUser(receivedData)
        setLoggedIn(true)
        setFirstName("")
        setLastName("")
        setEmail("")
        setPassword("")
        setPhoneNumber("")
        history.push("/users")

    }

    return <>


    <form className="forms forms-grid forms-div" onSubmit={handleForm}>

    <input className="forms forms-grid forms-bgd" type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="e-mail address"/>

    <input className="forms forms-grid forms-bgd" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="password"/>

    <button className="button, input, optgroup, select, textarea">
        <input className="forms  forms-bgd" type="submit" />
    </button>
    </form>

    </>;
};

export default LoginForm;