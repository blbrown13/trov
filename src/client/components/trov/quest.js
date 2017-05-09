import React from 'react';
import render from 'react-dom';


class Quest extends React.Component {
  constructor (props) {
    super(props);
    console.log(this.props.challenge);
  }
  render () {
    return (
    <li>{this.props.challenge}</li>
    )
  }
}

export default Quest;
