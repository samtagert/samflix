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
    .then(genre => this.setState({genre}))
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
        <MovieJumbotron title={this.props.genre}/>
        <MovieCard
          // movies={this.props.movies}
        />
        <MovieCard
          // movies={this.state.movies}
        />
        <p><Link to='/movies'>Back to the index</Link></p>
      </div>
  )}
}

export default MovieGenrePage;