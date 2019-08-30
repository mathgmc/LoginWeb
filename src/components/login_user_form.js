import React from 'react';

const LoginUserForm = (props) => {
  return (<div className='row'>
    <div className='col'></div>
    <div className='col-sm-8 col-md-5 card login'>
      <form onSubmit={props.registerUser}>
        <div className="form-group row">
          <label htmlFor="inputText" className="col-md-4 col-form-label">Email:</label>
          <div className="col-md-8">
            <input type="text" className="form-control" placeholder="Email" name="email"/>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputPassword" className="col-md-4 col-form-label">Password:</label>
          <div className="col-md-8">
            <input type="password" className="form-control" id="inputPassword" placeholder="Password" name="password"/>
          </div>
        </div>
          <button type="submit" className="btn btn-outline-dark">Submit</button>
      </form>
    </div>
    <div className='col'></div>
  </div>);
}

export default LoginUserForm;
