import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';


function GeneralInformationForm() {

    const [firstName, setFirstName] = useState("");
    const [middleInitial, setMiddleInitial] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const debounce = (func, wait = 1000) => {
        let timeout;
        return function executedFunction(...args) {
          const later = () => {
            clearTimeout(timeout);
            func(...args);
          };
          clearTimeout(timeout);
          timeout = setTimeout(later, wait);
        };
      };

    const validateFirstName = debounce(
        (value) => {
            const pattern = /[!@#$ %^&*()_+\-=[\]{};':"\\|,.<>/? ]+/;
            if (value.match(pattern)) {
                console.log("Special Characters are not allowed.")
            }
        }
    )

    return ( 
        <Form className='mt-4'>
            <Form.Group className="mb-3" controlId="formFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control 
                onChange={(e) => {
                    setFirstName(e.target.value); validateFirstName(e.target.value)
                }} 
                value={firstName} type="text" placeholder="Text here" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMiddleInitial">
                <Form.Label>Middle Initial (optional)</Form.Label>
                <Form.Control onChange={(e) => setMiddleInitial(e.target.value)} value={middleInitial} type="text" placeholder="Text here" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control onChange={(e) => setLastName(e.target.value)} value={lastName} type="text" placeholder="Text here" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPhoneNumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} type="text" placeholder="Ex. 09xxxxxxxxx" />
            </Form.Group>
      
    </Form>
     );
}

export default GeneralInformationForm;