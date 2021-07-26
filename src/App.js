
import './App.css';
import React, {useState} from 'react';
import Signup from './components/SignUp';
import Home from './components/Home';
import Users from './components/users';
import 'bootstrap/dist/css/bootstrap.min.css';
import  './assets/styles.scss';
import './assets/css.css'
import BaseLayout from './components/layout/BaseLayout';
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom';
import Login from './components/Login';
import StoreItems from './components/StoreItems';
import Store from './components/Store'; 
import Homepage from './components/Homepage'

function App() {

  const [user, setUser] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);


  return (
    <Router>
      <BaseLayout>
          <Switch>
            <Route exact path ="/" component={Homepage}/>
            <Route exact path='/store' component={Store}/>
            <Route path='/store/:id' component={StoreItems}/>
            <Route exact path='/' >
              <Home />
            </Route>
            <Route path='/signup'>
              <Signup user={user} loggedIn={loggedIn} setUser={setUser} setLoggedIn={setLoggedIn}/>
            </Route>
            <Route path='/users'>
              <Users user={user} loggedIn={loggedIn} setUser={setUser} setLoggedIn={setLoggedIn}/>
            </Route>
            <Route path='/login'>
              <Login user={user} loggedIn={loggedIn} setUser={setUser} setLoggedIn={setLoggedIn}/>
            </Route>
          </Switch>
      </BaseLayout>
      </Router>
  );
}

export default App;
