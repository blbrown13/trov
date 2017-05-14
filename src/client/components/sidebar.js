import React from 'react';
import render from 'react-dom';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: this.props.loggedIn,
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState({isLoggedIn: newProps.loggedIn});
  }

  renderLoginButton() {
    if (this.state.isLoggedIn) {
      return (<a href="/logoutuser">Log Out</a>)
    }
  }

  render () {

    if (!this.state.isLoggedIn) {return null}

    return (
      <div id="sidebar">
        <ul>
          <li>Account Settings</li>
          <li>{this.renderLoginButton()}</li>
        </ul>
      </div>
    )
  }
}

export default Sidebar;
