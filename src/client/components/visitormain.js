import React from 'react';
import {render} from 'react-dom';
import Trov from './trov/trov.js';
import Troves from './trov/troves.js';


export class VisitorMain extends React.Component {
  render () {
    return (
    <div id="visitormain" className="jumbotron text-center">
      <Troves />
      <p>Changed!!!!!!!</p>
      <p>WE WILL MAKE YOU RICH BEYOND YOUR WILDEST DREAMS</p>
      <img className="bg-featured" src="../images/banner.jpg"></img>
    </div>
    )
  }
}
