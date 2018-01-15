import React from 'react';
import {Link} from 'react-router-dom';
import { Grid, Row, Col, Thumbnail } from 'react-bootstrap'
import './MovieCard.css';

const MovieCard = (props) => (
  <div>
    {props.movies ?
    props.movies.map(movie => 
    <Link to={`/movie/${movie.id}`}><img className="movie-card" src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt="Movie Poster"/></Link>)
    :
    <p>loading</p>}
  </div>
)

export default MovieCard;