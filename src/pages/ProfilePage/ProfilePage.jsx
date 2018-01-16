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
        <div className="profile">
          <h1>Profile Page</h1>
          <p>Work in progress. Plans are to enable a watch list for each user.</p>
        </div>
      </div>
    )
  }
}

export default ProfilePage;