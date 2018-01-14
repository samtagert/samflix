import React, {Component} from 'react';
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
        <MovieCard />
      </div>
  )}
}

export default MovieIndexPage;