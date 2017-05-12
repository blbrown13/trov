import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header.js'
import VisitorMain from './visitormain';
import TrovMain from './trov/trovmain.js';
import Sidebar from './sidebar';
import Main from './main.js';
import Footer from './footer.js';
var axios = require('axios');

var $ = require('jquery');

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      username: "",
    }
  }

  handleLogIn () {

    // axios.get({
    //   url: 'http://localhost:3000/auth/facebook',
    //   headers: {
    //     'Access-Control-Allow-Origin': '*',
    //     'Content-Type': 'application/x-www-form-urlencoded'
    //   }
    // }).then((response) => {
    //   console.log('AXIOS REQ: /auth/facebook');
    // }).catch((error) => {
    //   console.log('AXIOS ERROR: ', error);
    // });

    // axios.get('/auth/facebook')
    //   .then(function(response) {
    //     console.log('AXIOS');
    //   })
    //   .catch(function (error) {
    //     console.log('ERROR', error);
    //   });

  // axios.get('/auth/facebook')
  //   .catch(function (error) {
  //   if (error.response) {
  //     // The request was made, but the server responded with a status code
  //     // that falls out of the range of 2xx
  //     console.log(error.response.data);
  //     console.log(error.response.status);
  //     console.log(error.response.headers);
  //   } else {
  //     // Something happened in setting up the request that triggered an Error
  //     console.log('Error', error.message);
  //   }
  //   console.log(error.config);
  // });

    // 'Content-Type': 'application/x-www-form-urlencode'

    // axios.get('http://localhost:3000/auth/facebook')
    //   .then(function() {
    //     console.log('axios /auth/facebook');
    //   })

    // $.ajax({
    //   type: 'GET',
    //   url: 'http://localhost:3000/auth/facebook',
    //   // dataType:'json',
    //   headers: {
    //     'Access-Control-Allow-Origin': '*',
    //     'Content-Type': 'application/x-www-form-urlencoded'
    //   },
    //   data: {
    //     'uid':36,
    //   },
    //   success: function(data){
    //     console.log('datadatadata');
    //   },
    //   error: function() {
    //     console.log('inside ajax: failing GET');
    //   }
    // });

    // var that = this;
    // console.log('Logging In');
    // //will need to check if there is a current session, if so:
    // this.setState({
    //   isLoggedIn: true,
    //   username: "Jake",
    // }, function () {
    //   console.log(this);
    //   console.log(this.state.isLoggedIn);
    // });
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
