import React from 'react';
import render from 'react-dom';
import Trov from './trov.js';
const challenges = require('./missionmeltdown.js');

export default class AvailableTroves extends React.Component {
  constructor () {
    super();
  }
  render () {
    return (
    <div className="troves">
      <h1> Your Troves</h1>
      <Trov challenges={challenges}/>
    </div>
    )
  }
}
