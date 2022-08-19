import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import GeneralInformationForm from './form-components/generalInformation';
import Header from './header';

function BodyContainer() {
    return ( 
        <Container className='mt-2'>
             <Header/>
             <GeneralInformationForm/>
        </Container>
     );
}

export default BodyContainer;