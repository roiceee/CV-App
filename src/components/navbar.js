import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import icon from '../assets/icon.png'
import Navbar from 'react-bootstrap/Navbar';

function NavigationBar() {
    return (
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={icon}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            ID Generator
          </Navbar.Brand>
        </Container>
      </Navbar>
     );
}

export default NavigationBar;