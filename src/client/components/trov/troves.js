import React from 'react';
import render from 'react-dom';
import Trov from './trov.js';
const challenges = ['Project Juice', 'Dolores Park', 'Galleria de la Raza', 'Tartine Bakery', 'Urban Putt', 'Flour + Water','Humphrey Slocombe'];

export default class Troves extends React.Component {
  constructor () {
    super();
  }
  render () {
    return (
    <div id="troves">
      <h1> Your Troves</h1>
      <Trov challenges={challenges}/>
    </div>
    )
  }
}
