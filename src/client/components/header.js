import React from 'react';
import render from 'react-dom';
import Profile from './profile.js'

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState({username: newProps.username});
    console.log(this.state.username);
  }

  render () {
    return (
    <div id="header">
     <img src="../images/trov_logo.png" />
     <Profile name={this.state.username} />
    </div>
    )
  }
}
