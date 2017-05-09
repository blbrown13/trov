import React from 'react';
import {render} from 'react-dom';
import {VisitorMain} from './visitormain.js';
import {UserNoTrovMain} from './usernotrov/usernotrovmain.js';
import {TrovMain} from './trov/trovmain.js';
import {Map} from './map.js'
// import testTrov from './exampleTrovData.js';
var testTrov = require('./exampleTrovData.js');

var ajax = require('./ajax.js');

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      isOnTrovNow: false,
      currentTrov: null,
      currentChallengeNum: 0
    }
    console.log('Test Trov Data: ', testTrov);
  }

  componentWillMount() {
    //will need to access db and set state with current Trov and progress here

    navigator.geolocation.getCurrentPosition(function(ps) {
      window.loc = ps;
      console.log('loc: ', ps);
    });
  }

  handleLogIn () {
    console.log('handleLogIn');
    //will need to check if there is a current session, if so:
    this.setState({
      isLoggedIn: true
    })
  }

  handleLogOut () {
    console.log('handleLogOut');
    this.setState({
      isLoggedIn: false
    })
  }

  handleSelectTrov () {
    console.log('handleSelectTrov');
    if (this.state.isLoggedIn) {
      this.setState({
        isOnTrovNow: true,
        currentTrov: testTrov //change me when we can select new trovs!!!!
      })
    }
  }

  handleCompleteChallenge () {
    console.log('handleCompleteChallenge');
    if (this.state.currentTrov && this.state.isLoggedIn) {
      var newCurrentChallengeNum = this.state.currentChallengeNum+1;
      this.setState({
        currentChallengeNum: newCurrentChallengeNum
      })
    }
  }

  handleCompleteTrov () {
    console.log('handleCompleteTrov');
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

  render() {
    // conditional renders here . . . ie if statements, will check isLoggedIn and isOnTrovNow

    {this._renderVisitorMain()}
    {this._renderUser()}

    // TEST AREA: delete me if not needed
    return (
      <div id="trovmain">
        <h1>test buttons</h1>
        <div>currentTrov: {this.state.currentTrov ? this.state.currentTrov.name : 'none'} </div>
        <div>currentChallengeNum: {this.state.currentChallengeNum}</div>
        <button onClick={this.handleLogIn.bind(this)}>LogIn</button>
        <button onClick={this.handleLogOut.bind(this)}>LogOut</button>
        <button onClick={this.handleSelectTrov.bind(this)}>Select Trov (testTrov)</button>
        <button onClick={this.handleCompleteChallenge.bind(this)}>Complete Challenge</button>
        <button onClick={this.handleCompleteTrov.bind(this)}>Complete Trov</button>
        <Map />
        <div>[GoogleMap goes here]</div>
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
  // <VisitorMain/>
  // )
  // }

}

export default Main;
