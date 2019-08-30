import React, {Component} from 'react';

import HttpService from './services/htttp_service';

import RegisterUserForm from './components/register_user_form';
import LoginUserForm from './components/login_user_form'

import './App.css';


const httpUser = new HttpService()

class App extends Component {
  render() {
    return (
    <div className="container App">

      <header className="App-header">
        <h1 className="App-title">Login Portal</h1>
      </header>

      <RegisterUserForm registerUser={httpUser.registerUser}/>
      <LoginUserForm registerUser={httpUser.registerUser}/>

    </div>);
  }
}

export default App;
