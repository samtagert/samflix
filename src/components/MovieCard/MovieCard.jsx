import React from 'react';
import {Link} from 'react-router-dom';
import { Grid, Row, Col, Thumbnail } from 'react-bootstrap'
import './MovieCard.css';

const MovieCard = (props) => (
  <div>
    <Link to="/movie/test"><img className="movie-card" src="https://images-na.ssl-images-amazon.com/images/I/71OebfTPCiL._SX466_.jpg" /></Link>
    <Link to="/movie/test"><img className="movie-card" src="https://images-na.ssl-images-amazon.com/images/I/71OebfTPCiL._SX466_.jpg" /></Link>
    <Link to="/movie/test"><img className="movie-card" src="https://images-na.ssl-images-amazon.com/images/I/71OebfTPCiL._SX466_.jpg" /></Link>
    <Link to="/movie/test"><img className="movie-card" src="https://images-na.ssl-images-amazon.com/images/I/71OebfTPCiL._SX466_.jpg" /></Link>
    <Link to="/movie/test"><img className="movie-card" src="https://images-na.ssl-images-amazon.com/images/I/71OebfTPCiL._SX466_.jpg" /></Link>
    <Link to="/movie/test"><img className="movie-card" src="https://images-na.ssl-images-amazon.com/images/I/71OebfTPCiL._SX466_.jpg" /></Link>
    <Link to="/movie/test"><img className="movie-card" src="https://images-na.ssl-images-amazon.com/images/I/71OebfTPCiL._SX466_.jpg" /></Link>
    <Link to="/movie/test"><img className="movie-card" src="https://images-na.ssl-images-amazon.com/images/I/71OebfTPCiL._SX466_.jpg" /></Link>
    <Link to="/movie/test"><img className="movie-card" src="https://images-na.ssl-images-amazon.com/images/I/71OebfTPCiL._SX466_.jpg" /></Link>
    <Link to="/movie/test"><img className="movie-card" src="https://images-na.ssl-images-amazon.com/images/I/71OebfTPCiL._SX466_.jpg" /></Link>
  </div>
)

export default MovieCard; 