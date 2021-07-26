import React from 'react';
import Header2 from './layout/Header2';
import Footer from './layout/Footer';
import { useSelector, useDispatch } from 'react-redux';
import { signOut } from '../actions/users';
import { useHistory } from 'react-router-dom';
import "../assets/forms.scss";
import "../assets/users.scss";

const Users = () => {
const dispatch = useDispatch();
const history = useHistory();
const user = useSelector(state => state.user.currentUser)
    console.log(user)

const handleLogout = () => {
    dispatch(
        signOut(() => {
          history.push("/");
        })
      );

    }
    


    return <>
     <Header2 />
     <br />
     <br />

    <div className="main-wrapper background">
        <div className="left-side">
            <div className="form-padding">
                <p className="register-alt-text f-w-600">At Fisker we love our customers!</p>
        <div class="col-sm-8">
            <h4 class="register-alt-text f-w-600 mb-10">{user.firstName} {user.lastName}</h4>
            <h6 class="m-b-20 p-b-5 b-b-default f-w-600 register-alt-text">Information</h6>
                <div class="row">
                    <div class="col-sm-6">
                        <p class="m-b-10 f-w-600 register-alt-text">Email:</p>
                        <h6 class="f-w-400 register-alt-text indent-text">{user.email}</h6>
                        <p class="m-b-10 f-w-600 register-alt-text">Phone Number:</p>
                        <h6 class="f-w-400 register-alt-text indent-text">{user.phoneNumber}</h6>
                </div>
                    <br />
        </div>
        <div className="col-sm-6">
            <button className="button" onClick={handleLogout}>
                Logout
            </button>
        </div>
            </div>
        </div>
    </div>
</div>


 <Footer />

    </>
}

export default Users;
