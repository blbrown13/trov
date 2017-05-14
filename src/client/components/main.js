import React from 'react';
import {render} from 'react-dom';
import axios from 'axios';
import {VisitorMain} from './visitormain.js';
import UserNoTrovMain from './trov/usernotrovmain.js';
import Troves from './trov/troves.js';
import {Map} from './map.js'
import testTrov from './exampleTrovData.js';


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      isOnTrovNow: true,
      username: '',
      allTrovs: [],
      userTrovs: [],
      currentTrov: null,
      currentChallengeNum: 0
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      isLoggedIn: newProps.loggedIn,
      username: newProps.username
    });
  }

  componentWillMount() {
    this.getAllTrovs();
    navigator.geolocation.getCurrentPosition(function(ps) {
      window.loc = ps;
      console.log('loc: ', ps);
    });
  }

  handleSelectTrov () { //how to insert trov as parameter???
    if (this.state.isLoggedIn) {
      this.setState({
        isOnTrovNow: true,
        currentTrov: testTrov //change me when we can select new trovs!!!!
      })
    }
  }

  handleCompleteChallenge () {
    var completed = this.state.currentChallengeNum + 1;
    this.setState({
      currentChallengeNum: completed
    });
    if (completed === this.state.userTrovs.currTrov[0].totalChallengesNo) {
      //Adjust state to prevent Trov component from rendering button
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


  render() {
    // conditional renders here . . . ie if statements, will check isLoggedIn and isOnTrovNow
    if (!this.state.isLoggedIn) {
      return <VisitorMain />
    } else if (!this.state.isOnTrovNow && this.state.isLoggedIn) {
      return <UserNoTrovMain allTrovs={this.state.allTrovs}/>
    } else if (this.state.isOnTrovNow && this.state.isLoggedIn) {
      return <Troves userTrovs={this.state.userTrovs}
                     getUserData={this.getUserData.bind(this)}
                     completeChallenge={this.handleCompleteChallenge.bind(this)}
                     progress={this.state.currentChallengeNum} />
    }
  }


  addNewUserToDB (username, email, location) {
    var newUser = {
      username: username,
      email: email,
      location: location
    }
    axios.post('http://localhost:3000/addnewusertodb', newUser)
      .then(function() {
        console.log('user added');
      })
  }

  getAllTrovs () {
    var context = this;
    axios.get('http://localhost:3000/getalltrovs')
      .then(function(trovArray) {
        context.setState({
          allTrovs: trovArray.data
        });
    })
    .catch(function(error) {
        console.log('Unable to communicate with server', error);
    });
  }

  getUserData () {
    var context = this;
    var processedUsername = this.state.username.split(' ').join('+');
    axios.get(`http://localhost:3000/getuserdata?id=${processedUsername}`)
      .then(function(userTrovArray) {
        context.setState({
          userTrovs: userTrovArray.data,
          currentChallengeNum: userTrovArray.data.currTrov[0].currentChallengeNo
        });
    })
    .catch(function(error) {
        console.log('Unable to communicate with server', error);
    });
  }

  updateUserTrov (trovName, currentChallengeNum) {
    var updatedTrovInfo = {
      trovName: trovName,
      currentChallengeNum: currentChallengeNum
    }
    axios.post('http://localhost:3000/updateusertrov', updatedTrovInfo)
      .then(function() {
        console.log('user trov data updated');
      })
  }

}

export default Main;
