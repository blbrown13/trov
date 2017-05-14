import React from 'react';
import render from 'react-dom';
const apiKey = require('../../gmaps.js');

export default class MapContainer extends React.Component {
  render() {
    const style = {
      width: '200px',
      height: '200px'
    }
    if (!this.props.loaded) {
      return <div>Loading</div>
    }
    return (
      <div style = {style}>
        <Map google={this.props.google} />
      </div>
    )
  }
}

export default GoogleApiComponent({
  apiKey: apiKey
})(MapContainer)
