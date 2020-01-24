import React from 'react';
import {
  BrowserRouter as Router, Route, Redirect, Switch,
}
  from 'react-router-dom';
import firebase from 'firebase/app';
import Auth from '../components/pages/Auth/Auth';
import NavBar from '../components/shared/NavBar/NavBar';
import firebaseConnection from '../helpers/data/connections';
import Profile from '../components/pages/Profile/Profile';
import Event from '../components/pages/Event/Event';
import EventForm from '../components/pages/EventForm/EventForm';


import './App.scss';

import 'firebase/auth';

// will be important for backend
const PublicRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === false ? <Component {...props} {...rest}/> : <Redirect to={{ pathname: '/', state: { from: props.location } }} />);
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};
const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === true ? <Component {...props} {...rest}/> : <Redirect to={{ pathname: '/auth', state: { from: props.location } }} />);
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

firebaseConnection();

class App extends React.Component {
  state = {
    authed: false,
    userObj: '',
  }

  // Console.log user to get info for stretch goal user profile
  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((userObj) => {
      console.log(userObj);
      if (userObj) {
        this.setState({ authed: true, userObj });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { authed, userObj } = this.state;
    return (
    <div className="App">
      <Router>
      <NavBar authed={authed} userObj={userObj}/>
        <Switch>
        <PrivateRoute path="/" exact component={Profile} authed={authed} userObj={userObj}/>
        <PublicRoute path="/auth" exact component={Auth} authed={authed}/>
        <PrivateRoute path="/event" exact component={Event} authed={authed}/>
        <PrivateRoute path="/event/new" exact component={EventForm} authed={authed}/>
        <PrivateRoute path="/event/:eventId/edit" exact component={EventForm} authed={authed} />
        </Switch>
      </Router>
    </div>
    );
  }
}

export default App;
