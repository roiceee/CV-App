import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import GeneralInformationForm from './form-components/generalInformation';
import Header from './header';
import { useState} from "react";

function BodyContainer() {
     const [firstName, setFirstName] = useState("");
     const [middleInitial, setMiddleInitial] = useState("");
     const [lastName, setLastName] = useState("");
     const [email, setEmail] = useState("");
     const [phoneNumber, setPhoneNumber] = useState("");
 

    return ( 
        <Container className='mt-2'>
             <Header/>
             <GeneralInformationForm
             firstName={firstName}
             middleInitial={middleInitial}
             lastName={lastName}
             email={email}
             phoneNumber={phoneNumber}
             setFirstName={setFirstName}
             setMiddleInitial={setMiddleInitial}
             setLastName={setLastName}
             setEmail={setEmail}
             setPhoneNumber={setPhoneNumber}
             />
             
        </Container>
     );
}

export default BodyContainer;