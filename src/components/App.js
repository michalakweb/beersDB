import React, { Component } from 'react';
import { Link } from "react-router-dom";

//CSS
import 'bootstrap/dist/css/bootstrap.css';
import {Container} from 'react-bootstrap';

class App extends Component {
  state = {
    name: 'Fetching from firebase...',
    email: ''
  }

  componentDidMount = () => {
    fetch('https://cors.io/?https://sandbox-api.brewerydb.com/v2/beers/?key=0e78f8bfabdcbd95f06487ec1c0976e6')
    .then((resp) => resp.json())
    .then(function(data) {
      console.log(data);
      })
    }

  render() {
    return (
      <div>
        <Container>


          <Link to='/'>Go to dashboard</Link>
        </Container>
      </div>
    );
  }
}

export default App;



