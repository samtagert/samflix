import React from 'react';
import {Link} from 'react-router-dom';
import './MovieCard.css';

const MovieCard = (props) => (
  <div>
    <p><Link to='/movies/test'>Movie Card</Link></p>
  </div>
)

export default MovieCard; 