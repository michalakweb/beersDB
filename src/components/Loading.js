import React from 'react';
import { Spinner, Row, Col } from 'react-bootstrap';

const Loading = () => (
    <div>
        <Row className='mt-4'>
            <Col className='d-flex justify-content-center'>
                <Spinner className='align-self-center' animation="grow" />
                <p className='p-2 align-self-center mb-0'><small>Loading...</small></p>
            </Col>
        </Row>
    </div>
)

export default Loading;