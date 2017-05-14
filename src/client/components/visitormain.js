import React from 'react';
import render from 'react-dom';
import Troves from './trov/troves.js';
import TrovMain from './trov/trovmain.js';
import Header from './header.js';
import Footer from './footer.js';
import Auth from './auth.js';


export class VisitorMain extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
    <div>
      <div id="visitormain">
        <h1>Find YOUR Trov today</h1>
      </div>
      <div id="newloginbutton"
        onClick={this.props.handleLogIn}
        >
        <div>Begin your Trov geoadventure now</div>
        <a className="btn btn-block btn-social btn-facebook">
        <span className="fa fa-facebook"></span> Log in with Facebook
        </a>
      </div>
      <div id="thetrovstory">
        <h1>What is a Trov?</h1>
          <p>A hint-based exploration of your city</p>
        <h3>User Testimonials</h3>
          <p>Jenny in Madrid, Spain: My friends and I trov every weekend!</p>
          <p>Muhammed in NY, NY: I met my wife troving!!!</p>
          <p>Zhang Lin in Lima, Peru: I found places I never knew in my home city!</p>
      </div>
    </div>
    )
  }
}

// Enjoy an adventure game
// Explore new places
// Hang out with friends
