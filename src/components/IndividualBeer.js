import React from 'react';
import IndividualBeerDetails from './IndividualBeerDetails';
import Navigation from './Navigation';
import { Container,  } from 'react-bootstrap';

class IndividualBeer extends React.Component {
    state = {
        oneBeerData: 'Loading...'
    }

    componentDidMount = () => {
        if(this.props.location.state === undefined) {
            fetch(`https://cors.io/?https://sandbox-api.brewerydb.com/v2${this.props.location.pathname}/?key=0e78f8bfabdcbd95f06487ec1c0976e6`)
            .then((resp) => resp.json())
            .then(database => {
                this.setState(() => ({
                oneBeerData: database.data
                }))
            })
        } 
    }

    render() {
        return (
            <div>    
                <Navigation />
                <Container className='align-self-center'>
                    {   // If the user reached this page from the list 
                        // he will see the results instatly loaded via the Link props
                    this.props.location.state !== undefined && 
                    <IndividualBeerDetails oneBeerData={this.props.location.state.oneBeerData}/> 
                    }
                    {   // If the user refreshed the page or went to it directly
                        // the results will be fetched from the API
                        // (LocalStorage could also be used to limit API calls) 
                    this.state.oneBeerData === 'Loading...' && 
                    this.props.location.state === undefined ? 
                    <p>Loading</p> : (this.props.location.state === undefined &&
                    <IndividualBeerDetails oneBeerData={this.state.oneBeerData}/>) 
                    }
                </Container>
            </div>
        );
    }
}


export default IndividualBeer;