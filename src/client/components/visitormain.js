import React from 'react';
import render from 'react-dom';
import Troves from './trov/troves.js';
import TrovMain from './trov/trovmain.js';
import Header from './header.js';


export class VisitorMain extends React.Component {
  render () {
    return (
    <div id="visitormain" className="jumbotron text-center">
      <Troves />
      <p>WE WILL MAKE YOU RICH BEYOND YOUR WILDEST DREAMS</p>
    </div>
    )
  }
}
