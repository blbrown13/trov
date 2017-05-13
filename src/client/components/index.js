import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header.js'
import VisitorMain from './visitormain';
import TrovMain from './trov/trovmain.js';
import Sidebar from './sidebar';
import Main from './main.js';
import Footer from './footer.js';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      username: "",
    }
  }
  handleLogIn () {
    // var that = this;
    console.log('Logging In');
    //will need to check if there is a current session, if so:
    this.setState({
      isLoggedIn: true,
      username: window.username,
    }, function () {
      console.log(this);
      console.log(this.state.isLoggedIn);
    });
  }
  handleLogOut () {
    var that = this;
    console.log('handleLogOut');
    that.setState({
      isLoggedIn: false,
      username: "",
    }, function () {
      console.log(this.state.isLoggedIn);
    });
  }
  render () {
    return (
    <div id="main">
      <Header username={this.state.username} login={this.handleLogIn} logout={this.handleLogOut} />
      <Main loggedIn={this.state.isLoggedIn}/>
      <Sidebar loggedIn={this.state.isLoggedIn} login={this.handleLogIn.bind(this)} logout={this.handleLogOut.bind(this)} />
      <Footer />
    </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
