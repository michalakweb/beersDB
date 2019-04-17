import React from 'react';
import { Link } from "react-router-dom";
import IndividualBeerDetails from './IndividualBeerDetails';

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
                {   // If the user reached this page from the list 
                    // he will see the results instatly loaded via the Link props
                    this.props.location.state !== undefined && 
                    <IndividualBeerDetails oneBeerData={this.props.location.state.oneBeerData}/> 
                    
                    // if available: related glass data 
                }
                {   // If the user reached refreshed the page or went to it directly
                    // the results will be fetched from the API
                    // (LocalStorage could also be used to limit API calls) 
                    this.state.oneBeerData === 'Loading...' && 
                    this.props.location.state === undefined ? 
                    <p>Loading</p> : (this.props.location.state === undefined &&
                    <IndividualBeerDetails oneBeerData={this.state.oneBeerData}/>) 
                }
                <Link to='/'>Back</Link>
            </div>
        );
    }
}


export default IndividualBeer;