import React from 'react';
import render from 'react-dom';
import Quest from './quest.js';
import Map from '../map.js';

export default class Trov extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      currentChallengeNum: 2,
      challenges: this.props.challenges,
      userLat: 0.00,
      userLong: 0.00,
    }
  }
  componentWillReceiveProps(newProps) {
    this.setState({
      challenges: newProps.challenges
    });
  }

  completeChallenge() {
    var completed = this.state.currentChallengeNum + 1;
    this.setState({
      currentChallengeNum: completed
    });
  }

  alertGeoCoords() {
    var currChall = this.state.challenges[this.state.currentChallengeNum];
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
      var currChall = this.state.challenges[counter];
      if (currChall !== undefined) {
        toRender.push(<Quest challenge={currChall.name} key={counter} displayType={"challenge"}/>);
      } else {
        toRender.push(<Quest challenge={"Challenge"} key={counter} displayType={"challenge"}/>);
      }
    }
    if (this.state.challenges[counter] === undefined) {
      // <Quest challenge={"You have completed this Trov"} key={counter} displayType={"hint"}/>
    } else {
      toRender.push(<Quest challenge={this.state.challenges[counter].hint} key={counter} displayType={"hint"}/>);
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
