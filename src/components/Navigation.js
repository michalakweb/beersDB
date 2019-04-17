import React from 'react';
import { Navbar } from 'react-bootstrap';
import logo from '../logo.svg';

const Navigation = () => (
    <Navbar bg="dark" variant="dark">
          <Navbar.Brand className='d-flex'>
          <img src={logo} alt="Logo" width="50" height="50" 
            className="align-self-center"/>
          <h3 className='align-self-center mb-0 pl-1'>Beer DB</h3>
          </Navbar.Brand>
    </Navbar>
)


export default Navigation;