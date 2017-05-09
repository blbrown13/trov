import React from 'react';
import {render} from 'react-dom';
import {VisitorMain} from './visitormain';
import {UserNoTrovMain} from './usernotrov/usernotrovmain';
import {TrovMain} from './trov/trovmain';
import {Map} from './map'
import testTrov from './exampleTrovData';


var ajax = require('./ajax.js');

export class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      isOnTrovNow: false,
      currentTrov: null,
      currentChallengeNum: 0

    }

  }

  componentWillMount() {

    //will need to access db and set state with current Trov and progress here

    //somehow we need up-to-date geo data, perhps this + setInterval will do it . . .
    navigator.geolocation.getCurrentPosition(function(ps) {
      window.loc = ps;
      console.log('loc: ', ps);
    });

  }

  handleLogIn () {
    //will need to check if there is a current session, if so:
    this.setState({
      isLoggedIn: true
    })
  }

  handleLogOut () {
    this.setState({
      isLoggedIn: false
    })
  }

  handleSelectTrov () {
    if (this.state.isLoggedIn) {
      this.setState({
        isOnTrovNow: true,
        currentTrov: testTrov //change me when we can select new trovs!!!!
      })
    }
  }

  handleCompleteChallenge () {
    if (this.state.currentTrov && this.state.isLoggedIn) {
      var newCurrentChallengeNum = this.state.currentChallengeNum+1;
      this.setState({
        currentChallengeNum: newCurrentChallengeNum
      })
    }
  }

  handleCompleteTrov () {
    this.setState({
      isOnTrovNow: false,
      currentTrov: null,
      currentChallengeNum: 0
    })
  }


  handleCheckLocButtonClick () {
    //checks if window.loc is acceptably close to this.state.currentTrov coordinates
    //gets passed down to trovmain
  }


  render () {

    //conditional renders here . . . ie if statements, will check isLoggedIn and isOnTrovNow 

    return (
      <div>

        {this._renderVisitorMain()}
        {this._renderUser()}

        //TEST AREA: delete me if not needed
        <h1>test buttons</h1>
        <div>currentTrov: {this.state.currentTrov ? this.state.currentTrov.name : 'none'} </div>
        <div>currentChallengeNum: {this.state.currentChallengeNum}</div>
        <button onClick={this.handleLogIn.bind(this)}>LogIn</button>
        <button onClick={this.handleLogOut.bind(this)}>LogOut</button>
        <button onClick={this.handleSelectTrov.bind(this)}>Select Trov (testTrov)</button>
        <button onClick={this.handleCompleteChallenge.bind(this)}>Complete Challenge</button>
        <button onClick={this.handleCompleteTrov.bind(this)}>Complete Trov</button>

      </div>

      )
  }

  _renderVisitorMain () {
    if (!this.state.isLoggedIn) {
      return <VisitorMain />
    } else {
      return null;
    }
  }

  _renderUser () {
    if (!this.state.isOnTrovNow && this.state.isLoggedIn) {
      return <UserNoTrovMain />
    } else if (this.state.isOnTrovNow && this.state.isLoggedIn) {
      return <TrovMain />
    }
  }


}

