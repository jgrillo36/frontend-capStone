import React, {useState, useEffect} from "react";
import "../assets/styles.scss"


const Forms = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
//   const [isValid, setIsValid] = useState(false);
    const [selectCountry, setSelectCountry] = useState('United States');
    const [selectCountryCode, setSelectCountryCode] = useState('USA +1');
    const [phoneNumber, setPhoneNumber] = useState();
    const [email, setEmail] = useState('');

    const handleForm = (e) => {

    e.preventDefault()

    // console.log(`
    //   Form Submitted
    //   ${textValue}
    //   ${isValid}
    //   ${selectValue}
    // `);
    }

    return <>

    {/* <h2>{textValue}</h2>
    <h2>{isValid ? "true" : "false"}</h2>
    <h2>{selectValue}</h2> */}

    <form className="forms forms-grid forms-div" onSubmit={handleForm}>

    <select className="forms forms-grid forms-bgd" name="selectValue" value={selectCountry} onChange={e=>setSelectCountry(e.target.value)}>
        <option value="USA">United States</option>
        <option value="Canada">Canada</option>
        <option value="Russia">Russia</option>
        <option value="Mexico">Mexico</option>
        <option value="Great Britain">Great Britan</option>
        <option value="Germany">Germany</option>
        <option value="France">France</option>
        <option value="Sweden">Sweden</option>
        <option value="Poland">Poland</option>
        <option value="Puerto Rico">Puerto Rico</option>
    </select>


    <input className="forms forms-grid forms-bgd html" type="text" value={firstName} onChange={(e)=>setFirstName(e.target.value)} placeholder="First Name"/>

    <input className="forms forms-grid forms-bgd" type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)} placeholder="Last Name"/>

    <input className="forms forms-grid forms-bgd" type="integer" value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} placeholder="Mobile phone"/>

    <input className="forms forms-grid forms-bgd" type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="e-mail address"/>

    <button className="button, input, optgroup, select, textarea">
        <input className="forms  forms-bgd" type="submit" />
    </button>
    </form>

    </>;
};

export default Forms;