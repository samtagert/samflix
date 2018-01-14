import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';

// import pages
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import WelcomePage from '../WelcomePage/WelcomePage';
import MovieIndexPage from '../MovieIndexPage/MovieIndexPage';
import MovieGenrePage from '../MovieGenrePage/MovieGenrePage';
import MovieShowPage from '../MovieShowPage/MovieShowPage';
import ProfilePage from '../ProfilePage/ProfilePage';

// import utilities
import userService from '../../utilities/userService';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: null
    }
  }
  
  handleSignup = () => {
    this.setState({user: userService.getUser()});
  }
  
  handleLogin = () => {
    this.setState({user: userService.getUser()});
  }
  
  handleLogout = () => {
    userService.logout();
    this.setState({user: null});
  }

  render() {
    return (
      <div className="app">
        <Router>
          <div>
            <Switch>
              <Route exact path='/' render={(props) =>
                <WelcomePage
                  {...props}
                />
              }/>
              <Route exact path='/movies' render={(props) =>
                <MovieIndexPage
                  {...props}
                  user={this.state.user}
                  handleLogout={this.handleLogout}
                />
              }/>
              <Route exact path='/movies/:id' render={(props) =>
                <MovieGenrePage
                  {...props}
                  user={this.state.user}
                  handleLogout={this.handleLogout}
                />
              }/>
              <Route exact path='/movie/:id' render={(props) =>
                <MovieShowPage
                  {...props}
                  user={this.state.user}
                  handleLogout={this.handleLogout}
                />
              }/>
              <Route exact path='/profile' render={(props) =>
                <ProfilePage
                  {...props}
                  user={this.state.user}
                  handleLogout={this.handleLogout}
                />
              }/>
              <Route exact path='/signup' render={(props) => 
                <SignupPage
                  {...props}
                  handleSignup={this.handleSignup}
                />
              }/>
              <Route exact path='/login' render={(props) => 
                <LoginPage
                  {...props}
                  handleLogin={this.handleLogin}
                />
              }/>              
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
