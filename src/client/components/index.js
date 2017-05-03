import React from 'react';
import {render} from 'react-dom';
import {Main} from './main';

class App extends React.Component {
  render () {
    return (
    <div id="main" className="container">
      <Main/>
    </div>
    )
  }
}

render(<App/>, document.getElementById('app'));
