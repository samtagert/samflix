import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './MovieGenrePage.css';
import NavBar from '../../components/NavBar/NavBar';
import MovieCard from '../../components/MovieCard/MovieCard';
import MovieJumbotron from '../../components/MovieJumbotron/MovieJumbotron';
import tmdbAPI from '../../utilities/tmdbAPI'

class MovieGenrePage extends Component {
  constructor(props) {
    super();
    this.state = {
      genre: null,
      movies: null
    };
  }
  
  genre = () => {
    //pass in the this.props.match.params.id
    tmdbAPI.fetchGenre()
    .then(movies => this.setState({movies}))
  }

  componentDidMount() {
    this.genre()
  }

  render(props) {
    return (
      <div>
        <NavBar
          {...props}
          user={this.props.user}
          handleLogout={this.props.handleLogout}
        />
        <MovieJumbotron title={this.state.genre}/>
        <h2>Sort by... component</h2>
        <MovieCard
          // genre={props.movies.action}
        />
        <p><Link to='/movies'>Back to the index</Link></p>
      </div>
  )}
}

export default MovieGenrePage;