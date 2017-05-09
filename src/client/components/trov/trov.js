import React from 'react';
import render from 'react-dom';
import Quest from './quest.js';


export default class Trov extends React.Component {
  constructor () {
    super();
    this.state = {
      progress: 4,
    }
  }
  renderChallenges() {
    var toRender = [];
    for (var counter = 0; counter < this.state.progress; counter++) {
      toRender.push(<Quest challenge={this.props.challenges[counter]} key={counter}/>);
    }
    return toRender;
  }

  render () {
    return (
    <div id="trov">
      <h2>Mission Meltdown</h2>
      <ol className="quest">
        {this.renderChallenges()}
      </ol>
    </div>
    )
  }
}
