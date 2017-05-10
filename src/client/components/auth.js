import React from 'react';
import render from 'react-dom';


class Auth extends React.Component {
  render () {
    return (
    <div id="auth">
    <h1>Log in to Trov</h1>
    <a className="btn btn-block btn-social btn-facebook" id="fb-button">
      <span className="fa fa-facebook"></span> Log in with Facebook
    </a>
    </div>
    )
  }
}

export default Auth;
