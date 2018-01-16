import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './MovieGenrePage.css';
import NavBar from '../../components/NavBar/NavBar';
import MovieJumbotron from '../../components/MovieJumbotron/MovieJumbotron';
import MovieCard from '../../components/MovieCard/MovieCard';

class MovieGenrePage extends Component {
  constructor(props) {
    super();
    this.state = {
      genre: null,
      movies1: null,
      movies2: null,
      movies3: null
    };
  }
  
  genre = () => {
    fetch(`/api/movies/genre/${this.props.match.params.id}`)
    .then(res => res.json())    
    .then(genre => this.setState({genre}))
  }

  movies1 = () => {
    fetch(`/api/movies/genre/1/${this.props.match.params.id}`)
    .then(res => res.json())
    .then(movies1 => this.setState({movies1}))
  }

  movies2 = () => {
    fetch(`/api/movies/genre/2/${this.props.match.params.id}`)
    .then(res => res.json())        
    .then(movies2 => this.setState({movies2}))
  }

  movies3 = () => {
    fetch(`/api/movies/genre/3/${this.props.match.params.id}`)
    .then(res => res.json())        
    .then(movies3 => this.setState({movies3}))
  }

  componentDidMount() {
    this.genre()
    this.movies1()
    this.movies2()
    this.movies3()
  }

  render(props) {
    return (
      <div className="index-page">
        <NavBar
          {...props}
          user={this.props.user}
          handleLogout={this.props.handleLogout}
        />
        <MovieJumbotron
          title={this.state.genre}
        />
        <div className="card-group">
          <MovieCard
            movies={this.state.movies1}
          />
          <MovieCard
            movies={this.state.movies2}
          />
          <MovieCard
            movies={this.state.movies3}
          />
        </div>
      </div>
    )
  }
}

export default MovieGenrePage;