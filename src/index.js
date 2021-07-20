import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import Welcome from './components/Welcome';
// import Feature from './components/Feature'; //protect
// import Signin from './components/auth/Signin';
// import Signout from './components/auth/Signout';
import Signup from './components/actions/signup';
import BaseLayout from './components/layout/BaseLayout';
// import Store from './components/store';
// import 'bootstrap/dist/css/bootstrap.min.css';
import  './assets/styles.scss';
// import reduxThunk from 'redux-thunk';
// import {createStore, applyMiddleware, compose} from 'redux';
// import {Provider} from 'react-redux';
// import reducer from './reducers/reducer';
// import requireAuth from './requireAuth';
// import Auth from './RequireAuthHooks';
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom';



// initializing redux store
// requires a reducer. Second argument is for redux dev-tools extension.
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(
//   reducer,
//   {},
//   composeEnhancers(applyMiddleware(reduxThunk))
// );
//provider hooks react to redux.  
//Must pass redux instance to provider via "store" prop.

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <Router>
      <BaseLayout>
          <Switch>
            <Route exact path='/' component={App}/>
            {/* <Route path='/welcome' component={Welcome}/> */}
            <Route path='/signup' component={Signup}/>
            {/* <Route path='/store' component={Store}/> */}
            {/* <Route exact path="/feature" render={() => (
              <Auth>
                <Feature />
              </Auth>
            )} />

            {/* <Route path='/feature' component={requireAuth(Feature)}/> */}
            {/* <Route path='/signout' component={Signout}/>
            <Route path='/signin' component={Signin}/> */}
          </Switch>
      </BaseLayout>
      </Router>
      {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);