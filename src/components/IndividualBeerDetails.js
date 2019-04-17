import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

const noInfo = 'No information'

// destructuring beer data for some readability
// if information is not provided I still display it, so that the layout can be more uniformal
const IndividualBeerDetails = ({oneBeerData: {name, abv, ibu, isOrganic, status, glass, labels}}) => (
    <div>
        <Card className='mt-3'>
            <Row>
                { //Rendering a label only if it's available
                    labels && 
                    <Col>
                    <img alt='' src={labels.medium} className='d-block mx-auto m-3' />
                    </Col>
                }
                <Col>
                    <Card.Body className='m-3'>
                    <Card.Title>{name ? name : 'Unknown Beer'}</Card.Title>
                    <Card.Text>Abv: {abv ? abv : noInfo}</Card.Text>
                    <Card.Text>Ibu: {ibu ? ibu : noInfo}</Card.Text>
                    <Card.Text>IsOrganic: {isOrganic ? isOrganic : noInfo}</Card.Text>
                    <Card.Text>Status: {status ? status : noInfo}</Card.Text>
                    <Card.Text>Glass: {glass ? glass.name : noInfo}</Card.Text>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
        <Link to={{
            pathname: `/`,
            state: {
              oneBeerData: name
            }
          }}>
        <Button className='mt-2' variant="secondary" size="lg">Back</Button>
        </Link>
    </div>
)


export default IndividualBeerDetails;