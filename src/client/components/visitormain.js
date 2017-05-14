import React from 'react';
import render from 'react-dom';
import Troves from './trov/troves.js';
import TrovMain from './trov/trovmain.js';
import Header from './header.js';
import Footer from './footer.js';
import Auth from './auth.js';


export class VisitorMain extends React.Component {
  render () {
    return (
    <div>
      <div id="visitormain">
        <h1>Find YOUR Trov today</h1>
      </div>
      <div id="newloginbutton">
        <div>Begin your Trov geoadventure now</div>
      </div>
    </div>
    )
  }
}

// Enjoy an adventure game
// Explore new places
// Hang out with friends
