import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  render () {
    return (
    <div id="main">
      <p> Hello React!</p>
    </div>
    )
  }
}

render(<App/>, document.getElementById('app'));