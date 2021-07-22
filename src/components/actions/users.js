import React from 'react';
import "../../assets/styles.scss";
import "../../assets/users.scss";

const Users = (props) => {
    
    const {user, loggedIn} = props;
    console.log(user)

    return <>
    <div className="main-wrapper background">
        <div className="left-side">
        <div class="page-content page-container" id="page-content">
    <div class="padding">
        <div class="row container d-flex justify-content-center">
            <div class="col-xl-6 col-md-12">
                <div class="card user-card-full">
                    <div class="row m-l-0 m-r-0">
                        <div class="col-sm-4 bg-c-lite-green user-profile">
                            <div class="card-block text-center text-white">
                                <h6 class="f-w-600">{user.firstName}</h6>
                                <h6 class="f-w-600">{user.lastName}</h6>
                                <i class=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                            </div>
                        </div>
                        <div class="col-sm-8">
                            <div class="card-block">
                                <h6 class="m-b-20 p-b-5 b-b-default f-w-600 register-alt-text">Information</h6>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <p class="m-b-10 f-w-600 register-alt-text">Email</p>
                                        <h6 class="text-muted f-w-400 register-alt-text">{user.email}</h6>
                                    </div>
                                    <div class="col-sm-6">
                                        <p class="m-b-10 f-w-600 register-alt-text">Phone Number</p>
                                        <h6 class="text-muted f-w-400 register-alt-text">{user.phoneNumber}</h6>
                                    </div>
                                    <br />
                                    <div className="col-sm-6">
                                        <button className="button">
                                            Logout
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
        {/* <Router>
            <BaseLayout>
                <Switch>
                    <Route path='/home'>
                        <Home />
                    </Route>
                </Switch>
            </BaseLayout>
        </Router> */}
        </div>
    </div>

    </>
}

export default Users;
