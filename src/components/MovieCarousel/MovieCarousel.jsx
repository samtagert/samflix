import React from 'react';
import {Link} from 'react-router-dom';
import {Carousel} from 'react-bootstrap'
import './MovieCarousel.css';

const MovieCarousel = (props) => (
  <div>
    <Carousel>
      <Carousel.Item>
        <img width={400} alt="900x500" src="https://images-na.ssl-images-amazon.com/images/I/71OebfTPCiL._SX466_.jpg" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width={400} alt="900x500" src="https://images-na.ssl-images-amazon.com/images/I/71OebfTPCiL._SX466_.jpg" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width={400} alt="900x500" src="https://images-na.ssl-images-amazon.com/images/I/71OebfTPCiL._SX466_.jpg" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>
)

export default MovieCarousel; 