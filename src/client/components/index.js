import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header.js'
import VisitorMain from './visitormain';
import TrovMain from './trov/trovmain.js';
import Sidebar from './sidebar';
import Footer from './footer.js';


 class App extends React.Component {
  render () {
    return (
    <div id="main" className="container">
      <Header />
      <VisitorMain/>
      <Sidebar />
      <Footer/>
    </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
