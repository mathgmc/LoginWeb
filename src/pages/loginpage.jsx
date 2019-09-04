import React from 'react'

import HttpService from '../services/htttp_service';

import HeaderComp from '../components/header'
import LoginUserForm from '../components/login_user_form'

const httpUser = new HttpService();

const LoginPage = () => {
    return (
    <div className="container App">

      <HeaderComp page={"Login"} />
      <LoginUserForm registerUser={httpUser.registerUser}/>

    </div>);
}

export default LoginPage;
