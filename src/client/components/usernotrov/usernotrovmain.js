import React from 'react';
import {render} from 'react-dom';
import {Troves} from '../trov/troves.js';

class UserNoTrovMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allTrovs: []
    }
  }
  // componentWillReceiveProps (newProps) {
  //   this.setState({allTrovs: newProps.allTrovs});
  // }

  render () {
    return (
    <div className="troves">
      <h1>Your Troves</h1>
      <p>You are not currently participating in any Troves</p>
      <h1>All Troves</h1>
    </div>
    )
  }
  // <Troves allTrovs={this.state.allTrovs} />
}

export default UserNoTrovMain;
