import React, { Component } from 'react';

//CSS
import 'bootstrap/dist/css/bootstrap.css';
import {Container} from 'react-bootstrap';
import List from './List';

class App extends Component {
  state = {
    database: ''
  }

  // After component mounts it fetches the database, which (upon success) updates
  // the component state
  componentDidMount = () => {
    fetch('https://cors.io/?https://sandbox-api.brewerydb.com/v2/beers/?key=0e78f8bfabdcbd95f06487ec1c0976e6')
    .then((resp) => resp.json())
    .then(database => {
        console.log(database);

        this.setState(() => ({
          database: database.data
        }))
      })
    }

  render() {
    return (
      <div>
        <Container>
          <List database={this.state.database}/>
        </Container>
      </div>
    );
  }
}

export default App;



