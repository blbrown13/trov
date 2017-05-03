import React from 'react';
import {render} from 'react-dom';


export class Map extends React.Component {
  render () {
    return (
      <iframe src=`//www.google.com/maps/embed/v1/place?q=Harrods,Brompton%20Rd,%20UK
            &zoom=17
            &key=YOUR_API_KEY`> //We need this!
        </iframe>
    )
  }
}




