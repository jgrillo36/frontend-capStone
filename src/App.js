import React from 'react';

import Store from './components/Store'; //protect

import BaseLayout from './components/layout/BaseLayout';
import 'bootstrap/dist/css/bootstrap.min.css';
import  './assets/styles.scss';
import {Provider} from 'react-redux';
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'
import StoreItems from './components/StoreItems';

const App = (props) => {
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
