import React, {Component} from 'react';

import RegisterPage from './pages/registerpage';
import LoginPage from './pages/loginpage'
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/Login" component={LoginPage}></Route>
        <Route path="/Register" component={RegisterPage}></Route>
        <Redirect to="/Login"></Redirect>
      </Router>
    );
  }
}

export default App;
