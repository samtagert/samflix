import React, {Component} from 'react';
import './MovieShowPage.css';
import NavBar from '../../components/NavBar/NavBar';

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
        <h1>Movie Show</h1>
      </div>
  )}
}

export default MovieShowPage;