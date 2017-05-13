import React from 'react';
import render from 'react-dom';
import Trov from './trov.js';
const challenges = require('./missionmeltdown.js');
const tahoe = require('./tahoe.js');

class Troves extends React.Component {
  constructor () {
    super();
  }
  // componentWillReceiveProps (newProps){
  //   this.setState({
  //     allTrovs: this.newProps.allTrovs
  //   });
  // }
  render () {
    return (
    <div className="troves">
      <h1>Your Troves</h1>
      <Trov challenges={tahoe} trovName={tahoe.name}/>
    </div>
    )
  }
}

export default Troves;
