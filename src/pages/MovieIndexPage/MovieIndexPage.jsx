import React, {Component} from 'react';
import './MovieIndexPage.css';
import NavBar from '../../components/NavBar/NavBar';
import MovieCard from '../../components/MovieCard/MovieCard';

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
        <h1>Movie Index</h1>
        <MovieCard />
      </div>
  )}
}

export default MovieIndexPage;