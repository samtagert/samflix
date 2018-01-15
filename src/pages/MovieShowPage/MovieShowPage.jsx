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

  render(props) {
    return (
      <div>
        <NavBar
          {...props}
          user={this.props.user}
          handleLogout={this.props.handleLogout}
        />
        <MovieJumbotron title={'banana'} />
        <h1>Movie Show</h1>
        <p><Link to='/movies'>Back to the index</Link></p>
      </div>
  )}
}

export default MovieShowPage;