import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './MovieGenrePage.css';
import NavBar from '../../components/NavBar/NavBar';
import MovieCard from '../../components/MovieCard/MovieCard';
import MovieJumbotron from '../../components/MovieJumbotron/MovieJumbotron';

class MovieGenrePage extends Component {
  constructor(props){
    super();
    this.state = {
      movies: null,
    };
  }
  
  render(props) {
    return (
      <div>
        <NavBar
          {...props}
          user={this.props.user}
          handleLogout={this.props.handleLogout}
        />
        <MovieJumbotron {...props}/>
        <h1>Movie Genre</h1>
        <h2>Sort by... component</h2>
        <MovieCard
          // genre={props.movies.action}
        />
        <p><Link to='/movies'>Back to the index</Link></p>
      </div>
  )}
}

export default MovieGenrePage;