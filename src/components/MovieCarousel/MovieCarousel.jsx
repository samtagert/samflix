import React from 'react';
import {Link} from 'react-router-dom';
import {Carousel, CarouselItem} from 'react-bootstrap'
import './MovieCarousel.css';

const MovieCarousel = (props) => (
  <div className="carousel">
    <Carousel>
    {props.movies ?
    props.movies.map(movie =>
      <Carousel.Item><img className="carousel-image" width={342} alt="Carousel" src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} />
        <Carousel.Caption>
          <h3 className="carousel-header"><Link className="carousel-title" to={`/movie/${movie.id}`}>{movie.title}</Link></h3>
          <p className="carousel-overview">{movie.overview}</p>
        </Carousel.Caption>
      </Carousel.Item>)
    :
    <div></div>
    }
    </Carousel>
  </div>
)

export default MovieCarousel; 