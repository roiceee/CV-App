import Form from "react-bootstrap/Form";
import React, { useCallback, useRef } from "react";
import "react-phone-number-input/style.css";
import {
  debouncedValidateRequiredInput,
  debouncedValidateEmail,
} from "./validation";
import "../../../styles/form-customize.css";

function GeneralInformationForm({ studentInfo, setStudentInfo }) {

  const fileInput = useRef(null);

  const onImageUpload = useCallback(() => {
    const imageFile = fileInput.current.files[0];
    const id = fileInput.current.id;
    setStudentInfo((studentInfo) => ({
      ...studentInfo,
      [id]: URL.createObjectURL(imageFile)
    }));
  })

  const validate = useCallback((e) => {
    const id = e.target.id;
    switch (id) {
      case "name":
        debouncedValidateRequiredInput(e, "name-error");
        break;
      case "email":
        debouncedValidateEmail(e, "email-error");
        break;
    }
  }, []);

    const changeInputHandler = useCallback((e) => {
    const { id, value } = e.target;
    validate(e);
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
        />
        <div id="name-error" className="error"></div>
      </Form.Group>

      <Form.Group className="mb-2" controlId="email">
        <Form.Control
          onChange={changeInputHandler}
          value={studentInfo.email}
          type="email"
          placeholder="Email (required)"
          maxLength={35}
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
        <Form.Label>ID Picture</Form.Label>
        <Form.Control type="file" accept="image/*" ref={fileInput} onChange={onImageUpload}/>
      </Form.Group>
    </Form>
  );
}

export default GeneralInformationForm;
