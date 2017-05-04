import React from 'react';
import {render} from 'react-dom';


export class Quest extends React.Component {
  render () {
    return (
    <ol class="quest">
      <li>Dolores Park</li>
      <li>Tartine Bakery</li>
      <li>Project Juice</li>
    </ol>
    )
  }
}