import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { useCallback } from "react";
import "react-phone-number-input/style.css";
import {
  debouncedValidateRequiredInput,
  debouncedValidateEmail,
  debouncedValidateInput,
} from "./validation";
import "../../../styles/form-customize.css";

function GeneralInformationForm({ studentInfo, setStudentInfo }) {
  const changeInputHandler = useCallback((e) => {
    const { id, value } = e.target;
    setStudentInfo((prevState) => ({
      ...prevState,
      [id]: value,
    }));
    console.log(id + "   " + value);
    switch (id) {
      case "name":
        debouncedValidateRequiredInput(e, "name-error");
        break;
      case "email":
        debouncedValidateEmail(e, "email-error");
        break;
      case "city":
      case "province":
        debouncedValidateInput(e, "city-error");
        break;
    }
  }, []);

  return (
    <Form className="mt-4">
      <h6>General Information</h6>
      <Form.Group className="mb-2" controlId="name">
        <Form.Control
          onChange={changeInputHandler}
          value={studentInfo.name}
          type="text"
          placeholder="Full Name (required)"
        />
        <div id="name-error" className="error"></div>
      </Form.Group>

      <Form.Group className="mb-2" controlId="email">
        <Form.Control
          onChange={changeInputHandler}
          value={studentInfo.email}
          type="email"
          placeholder="Email (required)"
        />
        <div id="email-error" className="error"></div>
      </Form.Group>

      <Row>
        <Col>
          <Form.Group className="mb-2" controlId="city">
            <Form.Control
              onChange={changeInputHandler}
              value={studentInfo.city}
              type="text"
              placeholder="City/Municipality"
            />
            <div id="city-error" className="error"></div>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-2" controlId="province">
            <Form.Control
              onChange={changeInputHandler}
              value={studentInfo.province}
              type="text"
              placeholder="State/Province"
            />
            <div id="province-error" className="error"></div>
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
}

export default GeneralInformationForm;
