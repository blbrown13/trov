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
    <div id="visitormain">
      <h1>Go on a fun adventure today</h1>
      <h2>Set up a Trov account</h2>
      <h2>Join a Trov</h2>
      <h2>Explore new places</h2>
      <h2>Hang out with friends</h2>
    </div>
    )
  }
}

// Enjoy an adventure game
// Explore new places
// Hang out with friends
