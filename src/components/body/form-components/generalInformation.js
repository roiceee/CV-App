import Form from "react-bootstrap/Form";
import React, { useCallback } from "react";
import "react-phone-number-input/style.css";
import {
  debouncedValidateRequiredInput,
  debouncedValidateEmail,
  debouncedValidateInput,
} from "./validation";
import "../../../styles/form-customize.css";

function GeneralInformationForm({ studentInfo, changeInputHandler }) {
  const onChange = useCallback((e) => {
    changeInputHandler(e);
    const id = e.target.id;
    switch (id) {
      case "name":
        debouncedValidateRequiredInput(e, "name-error");
        break;
      case "email":
        debouncedValidateEmail(e, "email-error");
        break;
      case "address":
        debouncedValidateInput(e, "address-error");
        break;
    }
  }, []);

  return (
    <Form className="mt-4">
      <h6>General Information</h6>
      <Form.Group className="mb-2" controlId="name">
        <Form.Control
          onChange={onChange}
          value={studentInfo.name}
          type="text"
          placeholder="Full Name (required)"
          maxLength={30}
        />
        <div id="name-error" className="error"></div>
      </Form.Group>

      <Form.Group className="mb-2" controlId="email">
        <Form.Control
          onChange={onChange}
          value={studentInfo.email}
          type="email"
          placeholder="Email (required)"
          maxLength={35}
        />
        <div id="email-error" className="error"></div>
      </Form.Group>

      <Form.Group className="mb-2" controlId="address">
        <Form.Control
          onChange={onChange}
          value={studentInfo.address}
          type="text"
          placeholder="Address"
          maxLength={45}
        />
        <div id="address-error" className="error"></div>
      </Form.Group>

      <Form.Group controlId="photo" className="mb-2">
        <Form.Label>Insert Image</Form.Label>
        <Form.Control type="file" accept="image/*" onChange={onChange}/>
      </Form.Group>
    </Form>
  );
}

export default GeneralInformationForm;
