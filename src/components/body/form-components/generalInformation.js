import Form from "react-bootstrap/Form";
import React, { useCallback } from "react";
import "react-phone-number-input/style.css";
import {
  debouncedValidateFirstName,
  debouncedValidateMiddleInitial,
  debouncedValidateLastName,
  debouncedValidateEmail,
} from "./validation";
import PhoneInput from "react-phone-number-input";
import '../../../styles/form-customize.css'

function GeneralInformationForm({
  firstName,
  middleInitial,
  lastName,
  email,
  phoneNumber,
  setFirstName,
  setMiddleInitial,
  setLastName,
  setEmail,
  setPhoneNumber,
}) {
  const changeInputHandler = useCallback((e) => {
    const value = e.target.value;
    const targetID = e.target.id;
    switch (targetID) {
      case "formFirstName":
        setFirstName(value);
        debouncedValidateFirstName(e);
        break;
      case "formMiddleInitial":
        setMiddleInitial(value);
        debouncedValidateMiddleInitial(e);
        break;
      case "formLastName":
        setLastName(value);
        debouncedValidateLastName(e);
        break;
      case "formBasicEmail":
        setEmail(value);
        debouncedValidateEmail(e);
        break;
      case "formPhoneNumber":
        setPhoneNumber(value);
        break;
    }
  }, []);

  return (
    <Form className="mt-4">
      <Form.Group className="mb-3" controlId="formFirstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          onChange={changeInputHandler}
          value={firstName}
          type="text"
          placeholder="Text here"
        />
        <div id="first-name-error" className="error"></div>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formMiddleInitial">
        <Form.Label>Middle Initial (optional)</Form.Label>
        <Form.Control
          onChange={changeInputHandler}
          value={middleInitial}
          type="text"
          placeholder="Text here"
        />
        <div id="middle-initial-error" className="error"></div>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formLastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          onChange={changeInputHandler}
          value={lastName}
          type="text"
          placeholder="Text here"
        />
        <div id="last-name-error" className="error"></div>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          onChange={changeInputHandler}
          value={email}
          type="email"
          placeholder="Enter email"
        />
        <div id="email-error" className="error"></div>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPhoneNumber">
        <Form.Label>Phone Number</Form.Label>
        <span className="mx-3">{phoneNumber}</span>
        <PhoneInput
          onChange={setPhoneNumber}
          value={phoneNumber}
          defaultCountry="PH"
          type="text"
          placeholder="xxx xxx xxxx"
        />
      </Form.Group>
    </Form>
  );
}

export default GeneralInformationForm;
