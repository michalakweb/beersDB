import React, { Component } from 'react';
import { Link } from "react-router-dom";

//Firebase
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

//CSS
import 'bootstrap/dist/css/bootstrap.css';
import {Container, Button} from 'react-bootstrap';
import './App.scss';

//Redux
import {incrementAction, decrementAction} from './redux/actions/actions';
import {store} from './redux/store';
import {connect} from 'react-redux';

const config = {
  apiKey: "AIzaSyCLwlab9A5oJJeA9SIy5jY6f857HOpkTS8",
  authDomain: "boilerplate-de6e2.firebaseapp.com",
  databaseURL: "https://boilerplate-de6e2.firebaseio.com",
  projectId: "boilerplate-de6e2",
  storageBucket: "boilerplate-de6e2.appspot.com",
  messagingSenderId: "457161987783"
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

class App extends Component {
  state = {
    name: 'Fetching from firebase...',
    email: ''
  }

  componentDidMount = () => {
    database.ref().on('value', (snapshot) => {
      const val = snapshot.val();
      this.setState(() => ({
        name: val.dane,
        email: val.users
      }))
    })
  }

  handleAdd = () => {
    this.props.dispatch(incrementAction());
  }

  handleMinus = () => {
    this.props.dispatch(decrementAction());
  }

  handleLogin = () => {
    firebase.auth().signInWithPopup(googleAuthProvider);
  }
  
  handleInfo = () => {
    var user = firebase.auth().currentUser;

    if (user != null) {
      user.providerData.forEach(function (profile) {
        console.log("Sign-in provider: " + profile.providerId);
        console.log("  Provider-specific UID: " + profile.uid);
        console.log("  Name: " + profile.displayName);
        console.log("  Email: " + profile.email);
        console.log("  Photo URL: " + profile.photoURL);

        // database.ref(`users/${profile.displayName}`).set(profile.email)
        
        
      });

    }
  }

  render() {
    return (
      <div>
        <Container>
          <h1>Counter</h1>
          <p>Current Count: {this.props.state}</p>
          <Button onClick={this.handleAdd}>+</Button>
          <Button onClick={this.handleMinus}>-</Button>
          <Button onClick={this.handleLogin}>Reset</Button>
          <Button onClick={this.handleInfo}>Info</Button>

          <p>Info from Firebase: {this.state.name}</p>

          {console.log(Object.values(this.state.email))}
          

          <Link to='/'>Go to dashboard</Link>
        </Container>
      </div>
    );
  }
}

store.subscribe(() => console.log(store.getState()))

const mapStateToProps = (state) => ({
  state
})

const reduxedApp = connect(mapStateToProps)(App);

export default reduxedApp;

// 1. 
// Set store: reducer, action, define store x
// Dispatch a test action x

// 2. 
// Connect redux state with App component x
// Send App to GithubPages x
// Organise file structure x
// Show state on componenet and get button for calculations x

// 3.
// Add Bootstrap x
// Add SimpleRouting x
// Read initial data from Firebase x


