import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './MovieIndexPage.css';
import NavBar from '../../components/NavBar/NavBar';
import MovieCard from '../../components/MovieCard/MovieCard';
import MovieCarousel from '../../components/MovieCarousel/MovieCarousel';
import tmdbAPI from '../../utilities/tmdbAPI'

class MovieIndexPage extends Component {
  constructor(props){
    super();
    this.state = {
      actionMovies: null,
      scienceFictionMovies: null,
      animationMovies: null,
      comedyMovies: null,
      crimeMovies: null,
      fantasyMovies: null
    };
  }
  
  action = () => {
    tmdbAPI.fetchAction()
    .then(actionMovies => this.setState({actionMovies}))
  }

  scienceFiction = () => {
    tmdbAPI.fetchScienceFiction()
    .then(scienceFictionMovies => this.setState({scienceFictionMovies}))
  }

  animation = () => {
    tmdbAPI.fetchAnimation()
    .then(animationMovies => this.setState({animationMovies}))
  }

  comedy = () => {
    tmdbAPI.fetchComedy()
    .then(comedyMovies => this.setState({comedyMovies}))
  }

  crime = () => {
    tmdbAPI.fetchCrime()
    .then(crimeMovies => this.setState({crimeMovies}))
  }

  fantasy = () => {
    tmdbAPI.fetchFantasy()
    .then(fantasyMovies => this.setState({fantasyMovies}))
  }
  
  componentDidMount() {
    this.action()
    this.scienceFiction()
    this.animation()
    this.comedy()
    this.crime()
    this.fantasy()
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
        <h4><Link to="/movies/action">Action</Link></h4>
        <MovieCard
          movies={this.state.actionMovies}
        />
        <h4><Link to="/movies/sciencefiction">Science Fiction</Link></h4>
        <MovieCard
          movies={this.state.scienceFictionMovies}        
        />
        <h4><Link to="/movies/animation">Animation</Link></h4>
        <MovieCard
          movies={this.state.animationMovies}        
        />
        <h4><Link to="/movies/comedy">Comedy</Link></h4>
        <MovieCard
          movies={this.state.comedyMovies}        
        />
        <h4><Link to="/movies/crime">Crime</Link></h4>
        <MovieCard
          movies={this.state.crimeMovies}        
        />
        <h4><Link to="/movies/fantasy">Fantasy</Link></h4>
        <MovieCard
          movies={this.state.fantasyMovies}        
        />
      </div>
  )}
}

export default MovieIndexPage;