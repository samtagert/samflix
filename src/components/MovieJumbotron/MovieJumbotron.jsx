import React from 'react';
import {Link} from 'react-router-dom';
import {Jumbotron} from 'react-bootstrap'
import './MovieJumbotron.css';

const MovieJumbotron = (props) => (
  <div>
    <Jumbotron className="jumbo">
      <h1 className="jumbo-title">{props.title}</h1>
    </Jumbotron>
  </div>
)

export default MovieJumbotron; 