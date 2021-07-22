
import './App.css';
import React, {useState} from 'react';
import Signup from './components/actions/signup';
import Home from './components/Home';
import Users from './components/actions/users';
import BaseLayout from './components/layout/BaseLayout';
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom';
import Login from './components/Login';

function App() {

  const [user, setUser] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);


  return (
    <Router>
      <BaseLayout>
          <Switch>
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
