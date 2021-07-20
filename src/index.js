import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Welcome from './components/Welcome';
import Store from './components/Store'; //protect
import Signin from './components/auth/Signin';
import Signout from './components/auth/Signout';
import Signup from './components/auth/Signup';
import BaseLayout from './components/layout/BaseLayout';
import 'bootstrap/dist/css/bootstrap.min.css';
import  './assets/styles.scss';
import {applyMiddleware, createStore, compose} from 'redux';
import {Provider} from 'react-redux';
import reduxThunk from 'redux-thunk'
import reducer from './reducers/reducer';
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'
import requireAuth from './requireAuth'
import RequireAuthHooks from './RequireAuthHooks'
import StoreItems from './components/StoreItems';



// initializing redux store
// requires a reducer. Second argument is for redux dev-tools extension.
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  {},
  composeEnhancers(applyMiddleware(reduxThunk))
);



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
      <BaseLayout>
          <Switch>

            <Route exact path='/store' component={Store}/>
            <Route path='/store/:id' component={StoreItems}/>

          </Switch>
      </BaseLayout>
      </Router>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
