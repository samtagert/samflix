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
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, ducimus dignissimos facilis nulla quasi illo. Sapiente iusto, impedit facere accusamus ut non culpa error aspernatur maiores quibusdam incidunt asperiores cum?</p>
      {/* <p>{props.summary}</p> */}
    </Jumbotron>
  </div>
)

export default MovieJumbotron; 