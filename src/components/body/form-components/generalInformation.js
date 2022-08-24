import Form from "react-bootstrap/Form";
import React, { useCallback, useRef } from "react";
import {
  validateRequiredInput,
  validateEmail,
} from "./validation";
import { debounce } from "lodash";

function GeneralInformationForm({
  studentInfo,
  setStudentInfo,

}) {
  const fileInput = useRef(null);

  const onImageUpload = useCallback(() => {
    const imageFile = fileInput.current.files[0];
    const id = fileInput.current.id;
    setStudentInfo((studentInfo) => ({
      ...studentInfo,
      [id]: URL.createObjectURL(imageFile),
    }));
  });


  const changeInputHandler = useCallback((e) => {
    const { id, value } = e.target;
    debouncedValidateGeneralInformation(id);
    setStudentInfo((studentInfo) => ({
      ...studentInfo,
      [id]: value,
    }));
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
          maxLength={30}
          className="need-validation"
        />
        <div id="name-error" className="error"></div>
      </Form.Group>

      <Form.Group className="mb-2 need-validation" controlId="email">
        <Form.Control
          onChange={changeInputHandler}
          value={studentInfo.email}
          type="email"
          placeholder="Email (required)"
          maxLength={35}
          className="need-validation"
        />
        <div id="email-error" className="error"></div>
      </Form.Group>

      <Form.Group className="mb-2" controlId="address">
        <Form.Control
          onChange={changeInputHandler}
          value={studentInfo.address}
          type="text"
          placeholder="Address"
          maxLength={45}
        />
        <div id="address-error" className="error"></div>
      </Form.Group>

      <Form.Group controlId="photo" className="mb-2">
        <Form.Label>ID Picture <span style={{fontSize: "0.7rem"}}>(same width and height for best results)</span></Form.Label>
        <Form.Control
          type="file"
          accept="image/*"
          ref={fileInput}
          onChange={onImageUpload}
        />
      </Form.Group>
    </Form>
  );
}

const debouncedValidateGeneralInformation = debounce(validateGeneralInformation, 1000);

function validateGeneralInformation(id) {
  if (id === "name") {
    const nameForm = document.getElementById(id);
    validateRequiredInput(nameForm, "name-error");
  }
  if (id === "email") {
    const emailForm = document.getElementById(id);
    validateEmail(emailForm, "email-error");
  }
}

export {GeneralInformationForm as default, validateGeneralInformation} ;
