import React, { Component } from 'react';

//CSS
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/style.scss';

// Components
import List from './List';
import Navigation from './Navigation';
import {Container, Alert} from 'react-bootstrap';

class App extends Component {
  state = {
    database: ''
  }

  // After component mounts it fetches the database, which (upon success) updates
  // the component state and the LocalStorage (sessionStorage could also be used here)
  componentDidMount = () => {
    const myListJSON = localStorage.getItem('database');
    if(!!myListJSON) {
      const data = JSON.parse(myListJSON);
      this.setState(() => ({
        database: data,
        error: undefined
      }))
      
    } else {
      fetch('https://cors.io/?https://sandbox-api.brewerydb.com/v2/beers/?key=0e78f8bfabdcbd95f06487ec1c0976e6')
      .then((resp) => resp.json())
      .then(database => {
        this.setState(() => ({
          database: database.data
        }))

        const myJSON = JSON.stringify(database.data);
        localStorage.setItem('database', myJSON);
      })
      .catch(error => {
        this.setState(() => ({
          error: error
        }))
      });
    }

    // Scrolling back into the same list item,
    // the name of header is passed from the InvidualBeerPage Link component as a prop 
    if(this.props.location.state !== undefined) {
      let text = this.props.location.state.oneBeerData;
      setTimeout(() => {
        for (const a of document.querySelectorAll("h4")) {
          if (a.textContent.includes(text)) {
            a.scrollIntoView()
          }
        }
      }, 1)
    }
    
    }

  render() {
    return (
      <div>
        <Navigation />
        <Container>
          <List database={this.state.database}/>
          {//Error rendering
            this.state.error && 
            <Alert className='mt-3' variant='danger'>
            Cannot connect to database. Check your connection or try again later.
            </Alert>
          }
        </Container>
      </div>
    );
  }
}

export default App;



