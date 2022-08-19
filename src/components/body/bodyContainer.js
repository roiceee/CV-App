import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Header from './header';

function BodyContainer() {
    return ( 
        <Container className='mt-2'>
             <Header/>
        </Container>
     );
}

export default BodyContainer;