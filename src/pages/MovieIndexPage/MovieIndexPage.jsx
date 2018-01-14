import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './MovieIndexPage.css';
import NavBar from '../../components/NavBar/NavBar';
import MovieCard from '../../components/MovieCard/MovieCard';
import MovieCarousel from '../../components/MovieCarousel/MovieCarousel';

class MovieIndexPage extends Component {
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
        <MovieCarousel {...props}/>
        <h4><Link to="/movies/genre">Action</Link></h4>
        <MovieCard
          // genre={props.movies.action}
        />
        <h4><Link to="/movies/genre">Drama</Link></h4>
        <MovieCard
          // genre={props.movies.action}
        />
        <h4><Link to="/movies/genre">Comedy</Link></h4>
        <MovieCard
          // genre={props.movies.action}
        />
        <h4><Link to="/movies/genre">Horror</Link></h4>
        <MovieCard
          // genre={props.movies.action}
        />
        <h4><Link to="/movies/genre">Sci-fi</Link></h4>
        <MovieCard
          // genre={props.movies.action}
        />
        <h4><Link to="/movies/genre">Fantasy</Link></h4>
        <MovieCard
          // genre={props.movies.action}
        />
      </div>
  )}
}

export default MovieIndexPage;