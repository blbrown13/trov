import React from 'react';
import render from 'react-dom';
import Quest from './quest.js';

export default class Trov extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      currentChallengeNum: 0,
      userLat: 0.00,
      userLong: 0.00,
    }
  }
  completeChallenge() {
    currentChallengeNum = this.state.currentChallengeNum;
    currentChallengeNum++;
    this.setState({
      currentChallengeNum: currentChallengeNum
    });
  }

  alertGeoCoords() {
    var currChall = this.props.challenges.challenges[this.state.currentChallengeNum];
    var trovContext = this;
    var userLat;
    var userLong;


    navigator.geolocation.getCurrentPosition(function(position){
      userLat = position.coords.latitude.toFixed(2);
      userLong = position.coords.longitude.toFixed(2);
      if(userLong == currChall.longitude.toFixed(2) && userLat == currChall.latitude.toFixed(2)) {
        trovContext.completeChallenge();
      }
    });
  }
  renderChallenges() {
    var toRender = [];
    var counter;
    for (counter = 0; counter < this.state.currentChallengeNum; counter++) {
      var currChall = this.props.challenges.challenges[counter];
      toRender.push(<Quest challenge={currChall.name} key={counter} displayType={"challenge"}/>);
    }
    if (this.props.challenges.challenges[counter] === undefined) {
      <Quest challenge={"You have completed this Trov"} key={counter} displayType={"hint"}/>
    } else {
      toRender.push(<Quest challenge={this.props.challenges.challenges[counter].hint} key={counter} displayType={"hint"}/>);
    }
    return toRender;
  }
  render () {
    return (
    <div id="trov">
      <h2>{this.props.trovName}</h2>
      <ul className="quest">
        {this.renderChallenges()}
      </ul>
      <button type="button" className="btn" onClick={this.alertGeoCoords.bind(this)}>Complete Challenge</button>
    </div>
    )
  }
}
