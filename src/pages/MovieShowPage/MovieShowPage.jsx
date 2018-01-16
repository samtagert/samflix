import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './MovieShowPage.css';
import NavBar from '../../components/NavBar/NavBar';
import MovieJumbotron from '../../components/MovieJumbotron/MovieJumbotron';

class MovieShowPage extends Component {
  constructor(props){
    super();
    this.state = {
      movie: null,
    };
  }

  movie = () => {
    console.log('ABOUT TO FETCH')
    fetch(`/api/movies/${this.props.match.params.id}`)
    .then(res => res.json())        
    .then(movie => this.setState({movie}))
  }

  componentDidMount() {
    console.log('COMPONENT MOUNT')
    this.movie()
  }
  
  render(props) {
    return (
      <div>
        <NavBar
          {...props}
          user={this.props.user}
          handleLogout={this.props.handleLogout}
        />
        {this.state.movie ?
        <div>
          <MovieJumbotron
            title={this.state.movie.title}
          />
          <p className="movie-info">Released: {this.state.movie.release_date} | Runtime: {this.state.movie.runtime} minutes | Average Rating: {this.state.movie.vote_average}/10</p>
          <h2 className="summary-header">Summary:</h2>
          <p className="movie-summary">{this.state.movie.overview}</p>
        </div>
        : <div></div>}
      </div>
  )}
}

export default MovieShowPage;