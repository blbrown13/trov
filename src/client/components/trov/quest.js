import React from 'react';
import render from 'react-dom';


class Quest extends React.Component {
  constructor () {
    super();
  }
  render () {
    return (
    <div className="quest">
    <ol>
      <li>Project Juice</li>
      <li>Dolores Park</li>
      <li>Galleria de la Raza</li>
      <li>Tartine Bakery</li>
      <li>Urban Putt</li>
      <li>Flour + Water</li>
      <li>Humphrey Slocombe</li>
    </ol>
    </div>
    )
  }
}

export default Quest;
