import React, { Component } from 'react';
import { Link } from "react-router-dom";

//CSS
import 'bootstrap/dist/css/bootstrap.css';
import {Container, Button} from 'react-bootstrap';
import './App.scss';

//Redux
import {incrementAction, decrementAction} from './redux/actions/actions';
import {store} from './redux/store';
import {connect} from 'react-redux';


class App extends Component {
  state = {
    name: 'Fetching from firebase...',
    email: ''
  }

  componentDidMount = () => {
  }

  handleAdd = () => {
    this.props.dispatch(incrementAction());
  }

  handleMinus = () => {
    this.props.dispatch(decrementAction());
  }

  render() {
    return (
      <div>
        <Container>
          <h1>Counter</h1>
          <p>Current Count: {this.props.state}</p>
          <Button onClick={this.handleAdd}>+</Button>
          <Button onClick={this.handleMinus}>-</Button>

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



