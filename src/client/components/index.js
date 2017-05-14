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
    //will need to check if there is a current session, if so:
    this.setState({
      isLoggedIn: true,
      username: window.username,
    });
  }
  handleLogOut () {
    var that = this;
    console.log('handleLogOut');
    that.setState({
      isLoggedIn: false,
      username: "",
    });
  }
  render () {
    return (
    <div id="main">
      <Header username={this.state.username} login={this.handleLogIn} logout={this.handleLogOut} />
<<<<<<< HEAD
      <Main username={this.state.username} loggedIn={this.state.isLoggedIn}/>
=======
      <Main 
        handleLogIn={this.handleLogIn.bind(this)}
        loggedIn={this.state.isLoggedIn}/>
>>>>>>> 19dc69671693c9bd5ea3d1b67d1853b56d916b0e
      <Sidebar loggedIn={this.state.isLoggedIn} login={this.handleLogIn.bind(this)} logout={this.handleLogOut.bind(this)} />
      <Footer />
    </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
