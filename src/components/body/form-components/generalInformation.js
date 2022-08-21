import Form from "react-bootstrap/Form";
import React, { useCallback } from "react";
import "react-phone-number-input/style.css";
import {
  debouncedValidateRequiredInput,
  debouncedValidateInput,
  debouncedValidateEmail,
} from "./validation";
import PhoneInput from "react-phone-number-input";
import "../../../styles/form-customize.css";

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
        debouncedValidateRequiredInput(e, "first-name-error");
        break;
      case "formMiddleInitial":
        setMiddleInitial(value);
        debouncedValidateInput(e, "middle-initial-error");
        break;
      case "formLastName":
        setLastName(value);
        debouncedValidateRequiredInput(e, "last-name-error");
        break;
      case "formBasicEmail":
        setEmail(value);
        debouncedValidateEmail(e, "email-error");
        break;
      case "formPhoneNumber":
        setPhoneNumber(value);
        break;
    }
  }, []);

  return (
    <Form className="mt-4">
      <h6>General Information</h6>
      <Form.Group className="mb-3" controlId="formFirstName">
        <Form.Label>First Name (required)</Form.Label>
        <Form.Control
          onChange={changeInputHandler}
          value={firstName}
          type="text"
          placeholder="Text here"
        />
        <div id="first-name-error" className="error"></div>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formMiddleInitial">
        <Form.Label>Middle Initial</Form.Label>
        <Form.Control
          onChange={changeInputHandler}
          value={middleInitial}
          type="text"
          placeholder="Text here"
        />
        <div id="middle-initial-error" className="error"></div>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formLastName">
        <Form.Label>Last Name (required)</Form.Label>
        <Form.Control
          onChange={changeInputHandler}
          value={lastName}
          type="text"
          placeholder="Text here"
        />
        <div id="last-name-error" className="error"></div>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address (required)</Form.Label>
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
