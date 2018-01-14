import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './ProfilePage.css';
import NavBar from '../../components/NavBar/NavBar';

class ProfilePage extends Component {
  constructor(props){
    super();
    this.state = {
      watchlist: null,
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
        <h1>Profile Page</h1>
        <p><Link to='/movies'>Back to the index</Link></p>
      </div>
  )}
}

export default ProfilePage;