import React from 'react';
import {render} from 'react-dom';

var ajax = require('./ajax.js');

export class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <h1>hello again from Main this is a simple test</h1>
      <h1>loc: window.loc</h1>



      )
  }

}

