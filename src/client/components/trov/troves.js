import React from 'react';
import render from 'react-dom';
import Trov from './trov.js';
const challenges = require('./missionmeltdown.js');
const tahoe = require('./tahoe.js');

class Troves extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      userTrovs: '',
      challenges: [],
      trovNames: 'Trov Name'
    }
    this.props.getUserData();
  }
  componentWillReceiveProps (newProps){
    this.setState({
      userTrovs: newProps.userTrovs,
      challenges: newProps.userTrovs.challenges,
      trovNames: newProps.userTrovs.currTrov[0].trovId
    });
  }
  render () {
    return (
    <div className="troves">
      <h1>Your Troves</h1>
      <Trov challenges={this.state.challenges} trovName={this.state.trovNames}/>
    </div>
    )
  }
}

export default Troves;
