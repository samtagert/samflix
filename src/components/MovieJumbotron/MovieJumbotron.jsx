import React from 'react';
import {Link} from 'react-router-dom';
import {Jumbotron} from 'react-bootstrap'
import './MovieJumbotron.css';

// try to make jumbotron work for show page and genre, pass down the same prop name in the 
// genre page and show page

const MovieJumbotron = (props) => (
  <div>
    <Jumbotron>
      <h1>{props.title}</h1>
      <p>{props.summary}</p>
    </Jumbotron>
  </div>
)

export default MovieJumbotron; 