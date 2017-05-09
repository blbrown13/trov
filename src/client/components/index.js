import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header.js'
import VisitorMain from './visitormain';
import TrovMain from './trov/trovmain.js';
import Sidebar from './sidebar'
import Main from './main.js'

class App extends React.Component {
  render () {
    return (
    <div id="main" className="container">
      <Header />
      <Main />
      <Sidebar />
    </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
