import React from 'react';
import render from 'react-dom';
import Quest from './quest.js';
import Map from '../map.js';

export default class TrovMain extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      currentChallengeNum: this.props.progress,
      challenges: this.props.challenges,
      userLat: 0.00,
      userLong: 0.00,
    }
  }
  componentWillReceiveProps(newProps) {
    this.setState({
      currentChallengeNum: newProps.progress,
      challenges: newProps.challenges
    });
  }

  alertGeoCoords() {
    var currChall = this.state.challenges[this.state.currentChallengeNum];
    var speckLat = Number(currChall.latitude).toFixed(2);
    var speckLong = Number(currChall.longitude).toFixed(2);
    var trovContext = this;
    var userLat;
    var userLong;

    navigator.geolocation.getCurrentPosition(function(position){
      userLat = position.coords.latitude.toFixed(2);
      userLong = position.coords.longitude.toFixed(2);
      if(userLong == speckLong && userLat == speckLat) {
        trovContext.props.completeChallenge();
        console.log('Success!')
      } else {
        alert('Challenge cannot be completed since you are not at the right location');
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
      toRender.push(<Quest challenge={"You have completed this Trov"} key={counter} displayType={"trov-completion"}/>);
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
