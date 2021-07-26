
import './App.css';
import React, {useState} from 'react';
import Signup from './components/SignUp';
import Home from './components/Home';
import Users from './components/users';
import 'bootstrap/dist/css/bootstrap.min.css';
import  './assets/styles.scss';
import './assets/css.css'
// import BaseLayout from './components/layout/BaseLayout';
// import Footer from './components/layout/Footer';
// import Header from './components/layout/Header';
import {
  BrowserRouter as Router,
  Redirect,
  Route, Switch
} from 'react-router-dom';
import {useSelector} from 'react-redux';
import Login from './components/Login';
import StoreItems from './components/StoreItems';
import Store from './components/Store'; 
import Homepage from './components/Homepage'
import About from './components/AboutUs';

function App() {

  const [user, setUser] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const auth = useSelector(state => state.user.auth);
  console.log('auth', auth)

  return (
    <Router>
      {/* <BaseLayout> */}
      {/* <Header /> */}
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
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/users'>
              {auth ? 
              <Users user={user} loggedIn={loggedIn} setUser={setUser} setLoggedIn={setLoggedIn}/>:
              <Redirect to='/login' />
              }
              </Route>
            <Route path='/login'>
              <Login user={user} loggedIn={loggedIn} setUser={setUser} setLoggedIn={setLoggedIn}/>
            </Route>
          </Switch>
      {/* </BaseLayout> */}
      {/* <Footer /> */}
      </Router>
  );
}

export default App;
