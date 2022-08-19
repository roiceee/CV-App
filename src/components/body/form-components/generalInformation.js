import Form from "react-bootstrap/Form";
import React, { useState, useCallback } from "react";
import { debounce } from "lodash";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

function GeneralInformationForm() {
  const [firstName, setFirstName] = useState("");
  const [middleInitial, setMiddleInitial] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <Form className="mt-4">
      <Form.Group className="mb-3" controlId="formFirstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          onChange={(e) => {
            setFirstName(e.target.value);
            debouncedValidateFirstName(e.target.value);
          }}
          value={firstName}
          type="text"
          placeholder="Text here"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formMiddleInitial">
        <Form.Label>Middle Initial (optional)</Form.Label>
        <Form.Control
          onChange={(e) => {
            setMiddleInitial(e.target.value);
            debouncedValidateMiddleInitial(e.target.value);
          }}
          value={middleInitial}
          type="text"
          placeholder="Text here"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formLastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          onChange={(e) => {
            setLastName(e.target.value);
            debouncedValidateLastName(e.target.value);
          }}
          value={lastName}
          type="text"
          placeholder="Text here"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          onChange={(e) => {
            setEmail(e.target.value);
            debouncedValidateEmail(e.target.value);
          }}
          value={email}
          type="email"
          placeholder="Enter email"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPhoneNumber">
        <Form.Label>Phone Number</Form.Label>
        <span className='mx-3'>{phoneNumber}</span>
        <PhoneInput
          onChange={
            setPhoneNumber
          }
          value={phoneNumber}
          defaultCountry='PH'
          type="text"
          placeholder="xxx xxx xxxx"
        />
      </Form.Group>

    </Form>
  );
}

function validateFirstName(value) {
  const pattern = /[!@#$ %^&*()_+\-=[\]{};':"\\|,.<>/?]+/;
  if (value.trim() === "") {
    console.log("This field is required.");
    return;
  }
  if (value.match(pattern)) {
    console.log("Special Characters are not allowed.");
    return;
  }
}

function validateMiddleInitial(value) {
  const pattern = /[!@#$ %^&*()_+\-=[\]{};':"\\|,.<>/?]+/;
  if (value.match(pattern)) {
    console.log("Special Characters are not allowed.");
    return;
  }
}

function validateLastName(value) {
  const pattern = /[!@#$ %^&*()_+\-=[\]{};':"\\|,.<>/?]+/;
  if (value.trim() === "") {
    console.log("This field is required.");
    return;
  }
  if (value.match(pattern)) {
    console.log("Special Characters are not allowed.");
    return;
  }
}

function validateEmail(value) {
  const pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  if (value.trim() === "") {
    console.log("This field is required.");
    return;
  }
  if (!value.match(pattern)) {
    console.log("Must be a valid email address.");
    return;
  }
}

const debouncedValidateFirstName = debounce(() => validateFirstName(), 1000);
const debouncedValidateMiddleInitial = debounce(() => validateMiddleInitial(),1000);
const debouncedValidateLastName = debounce(() => validateLastName(), 1000);
const debouncedValidateEmail = debounce(validateEmail, 1000);

export default GeneralInformationForm;
