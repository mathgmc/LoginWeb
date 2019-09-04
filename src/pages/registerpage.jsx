import React from 'react'

import HttpService from '../services/htttp_service';

import HeaderComp from '../components/header'
import RegisterUserForm from '../components/register_user_form';

const httpUser = new HttpService();

const RegisterPage = () => {
    return (
    <div className="container App">

      <HeaderComp page="Register" />
      <RegisterUserForm registerUser={httpUser.registerUser}/>

    </div>);
}

export default RegisterPage;
