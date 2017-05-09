import React from 'react';
import render from 'react-dom';


class Profile extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
    <span id="profile">
      <p>{this.props.name}</p>
    </span>
    )
  }
}

export default Profile;
