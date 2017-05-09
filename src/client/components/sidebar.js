import React from 'react';
import render from 'react-dom';


class Sidebar extends React.Component {
  render () {
    return (
    <div id="sidebar">
    <ul>
      <li>Account Settings</li>
      <li><a>Sign Up</a> / <a>Login</a></li>
    </ul>
    </div>
    )
  }
}

export default Sidebar;
