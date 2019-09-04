import React from 'react';
import {Link} from 'react-router-dom';

class HeaderComp extends React.Component{
  constructor(props) {
    super(props);
    this.onLoad = () => {
      this.login.setState({ color: 'white'});
    }
  }
  componentDidMount() {
    window.addEventListener('load', this.onLoad);
  }

  render(){
    return (
        <header className="App-header">
        <div className="header-links">
            <Link to="/Login"
              ref={(link) => {this.login = link}}
               className="App-menu App-menu-left">Login Portal</Link>
            <div className="Header-vertical-divider"></div>
            <Link to="Register"
              className="App-menu App-menu-right">Register Portal</Link>
        </div>
        </header>

      );
  }
}

export default HeaderComp;
