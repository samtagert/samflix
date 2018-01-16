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
      fantasyMovies: null,
      popularMovies: null
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

  popular = () => {
    tmdbAPI.fetchPopular()
    .then(popularMovies => this.setState({popularMovies}))
  }
  
  componentDidMount() {
    this.action()
    this.scienceFiction()
    this.animation()
    this.comedy()
    this.crime()
    this.fantasy()
    this.popular()
  }
  
  render(props) {
    return (
      <div className="index-page">
        <NavBar
          {...props}
          user={this.props.user}
          handleLogout={this.props.handleLogout}
        />
        <MovieCarousel
          movies={this.state.popularMovies}
        />
        <div className="card-group">
          <h1 className="header"><Link className="title" to="/movies/genre/28" genre="Action">Action</Link></h1>
          <MovieCard
            movies={this.state.actionMovies}
          />
        </div>
        <div className="card-group">        
          <h1 className="header"><Link className="title" to="/movies/genre/878">Sci-Fi</Link></h1>
          <MovieCard
            movies={this.state.scienceFictionMovies}        
          />
        </div>        
        <div className="card-group">        
          <h1 className="header"><Link className="title" to="/movies/genre/16">Animation</Link></h1>
          <MovieCard
            movies={this.state.animationMovies}        
          />
        </div>        
        <div className="card-group">        
          <h1 className="header"><Link className="title" to="/movies/genre/35">Comedy</Link></h1>
          <MovieCard
            movies={this.state.comedyMovies}        
          />
        </div>        
        <div className="card-group">        
          <h1 className="header"><Link className="title" to="/movies/genre/80">Crime</Link></h1>
          <MovieCard
            movies={this.state.crimeMovies}        
          />
        </div>        
        <div className="card-group">        
          <h1 className="header"><Link className="title" to="/movies/genre/14">Fantasy</Link></h1>
          <MovieCard
            movies={this.state.fantasyMovies}        
          />
        </div>        
      </div>
    )
  }
}

export default MovieIndexPage;