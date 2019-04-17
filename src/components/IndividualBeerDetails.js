import React from 'react';
import { Card } from 'react-bootstrap';

const noInfo = 'No information'

// destructuring beer data for some readability
// if information is not provided I still display it, so that the layout can be more uniformal
const IndividualBeerDetails = ({oneBeerData: {name, abv, ibu, isOrganic, status, glass}}) => (
    <div>
        <Card className='align-self-center'>
            <Card.Body>
            <Card.Title>{name ? name : 'Unknown Beer'}</Card.Title>
            <Card.Text>Abv: {abv ? abv : noInfo}</Card.Text>
            <Card.Text>Ibu: {ibu ? ibu : noInfo}</Card.Text>
            <Card.Text>IsOrganic: {isOrganic ? isOrganic : noInfo}</Card.Text>
            <Card.Text>Status: {status ? status : noInfo}</Card.Text>
            <Card.Text>Glass: {glass ? glass.name : noInfo}</Card.Text>
            </Card.Body>
        </Card>
    </div>
)


export default IndividualBeerDetails;