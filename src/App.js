import React from 'react';
import Store from './components/Store'; //protect
import BaseLayout from './components/layout/BaseLayout';
import 'bootstrap/dist/css/bootstrap.min.css';
import  './assets/styles.scss';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore, compose} from 'redux';
import reduxThunk from 'redux-thunk'
import reducer from './reducers/';
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'
import StoreItems from './components/StoreItems';

const App = (props) => {

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  {},
  composeEnhancers(applyMiddleware(reduxThunk))
);

  return (
    
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
  
  )
}

export default App
