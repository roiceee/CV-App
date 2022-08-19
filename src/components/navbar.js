import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import icon from '../assets/icon.png'
import Navbar from 'react-bootstrap/Navbar';

function NavigationBar(props) {
    return (
      <Navbar bg="secondary" variant="secondary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={icon}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            {props.title}
          </Navbar.Brand>
        </Container>
      </Navbar>
     );
}

export default NavigationBar;