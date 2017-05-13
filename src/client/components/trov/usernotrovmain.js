import React from 'react';
import render from 'react-dom';
import Trov from './trov.js';
const tahoe = require('./tahoe.js');

class UserNoTrovMain extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      allTrovs: this.props.allTrovs
    }
  }
  componentWillReceiveProps (newProps){
    this.setState({
      allTrovs: this.newProps.allTrovs
    });
  }
  render () {
    return (
    <div className="troves">
      <h1>All Trovs</h1>
      {this.state.allTrovs.map((trov, trovId) => <Trov challenges={trov} trovName={trov.name} key={trovId} />)}
    </div>
    )
  }
}

export default UserNoTrovMain;
