import React, {Component} from 'react';
import UserForm from './components/user_form';
import HttpService from './services/htttp_service';
import './App.css';


const httpUser = new HttpService()

class App extends Component {
  render() {
    return (<div className="container App">

      <header className="App-header">
        <h1 className="App-title">Login Portal</h1>
      </header>

      <UserForm getUser={httpUser.getUser}/>
    </div>);
  }
}

export default App;
