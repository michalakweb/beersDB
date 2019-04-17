import React from 'react';
import { Link } from "react-router-dom";
import { Row, Col, Button } from 'react-bootstrap';

const ListItem = (props) => (
    <div>    
        <Row>
          <Col className='py-4' sm><h4>{props.database.name}</h4></Col>
        </Row>
        <Row className='text-center lead'>
          <Col xs><p>Abv: {props.database.abv ? props.database.abv : '...'}</p></Col>
          <Col xs><p>Ibu: {props.database.ibu ? props.database.ibu : '...'}</p></Col>
          <Col xs>
              <Link to={{
                pathname: `/beer/${props.database.id}`,
                state: {
                  oneBeerData: props.database
                }
              }}><Button variant="outline-primary">Details</Button>
              </Link>
          </Col>
          
        
        
        
        </Row>
    </div>
)


export default ListItem;