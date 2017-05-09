import React from 'react';
import render from 'react-dom';
import Profile from './profile.js'

export default class Header extends React.Component {
  render () {
    return (
    <div id="header">
     <img src="../images/trov_logo.png" />
     <Profile name={"Jake"} />
    </div>
    )
  }
}
