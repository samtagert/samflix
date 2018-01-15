import React from 'react';
import {Link} from 'react-router-dom';
import {Jumbotron} from 'react-bootstrap'
import './MovieJumbotron.css';

// try to make jumbotron work for show page and genre, pass down the same prop name in the 
// genre page and show page

const MovieJumbotron = (props) => (
  <div>
    <Jumbotron>
      <h1>Genre/Movie Title</h1>
      <p>
        This is a simple hero unit, a simple jumbotron-style component for calling
        extra attention to featured content or information.
      </p>
    </Jumbotron>
  </div>
)

export default MovieJumbotron; 