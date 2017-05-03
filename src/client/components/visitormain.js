import React from 'react';
import {render} from 'react-dom';

var bootstrap = require('bootstrap');


export class VisitorMain extends React.Component {
  render () {
    return (
    <div>
      <div id="visitormain" class="jumbotron text-center">
        <h1>Trov</h1>
        <p>WE WILL MAKE YOU RICH BEYOND YOUR WILDEST DREAMS</p> 
      </div>
      <img class="bg-featured" src="../images/banner.jpg"></img>
    </div>
    )
  }
}