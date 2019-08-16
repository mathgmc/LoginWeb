import React from 'react';

const UserForm = (props) => {
  return (
    <form onSubmit={props.getUser}>
      <input className="inputFields" type='text' name="username"/>
      <input className="inputFields" type='password' name="password"/>
      <button>Submit</button><br/>

    </form>

  );
}

export default UserForm;
