import React from 'react';
import {render} from 'react-dom';
import Quest from './quest.js';


export class Trov extends React.Component {
  render () {
    return (
    <div id="trov">
      <h2>Mission Meltdown</h2>
      <Quest />
    </div>
    )
  }
}