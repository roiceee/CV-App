import React, { useCallback } from "react";
import Form from "react-bootstrap/Form";
import {
  debouncedValidateRequiredInput,
} from "./validation";

function SchoolInformationForm({
  studentInfo,
  setStudentInfo
}) {
  const changeInputHandler = useCallback((e) => {
    const { id, value } = e.target;
    validate(e);
    setStudentInfo((studentInfo) => ({
      ...studentInfo,
      [id]: value,
    }));
  }, []);

  const validate = useCallback((e) => {
    const id = e.target.id;
    switch (id) {
      case "schoolName":
        debouncedValidateRequiredInput(e, "school-name-error");
        break;
      case "course":
        debouncedValidateRequiredInput(e, "course-error");
        break;
    }
  }, []);

  return (
    <Form className="mt-3">
        <h6>School Information</h6>
        <Form.Group className="mb-2" controlId="schoolName">
        <Form.Control
          onChange={changeInputHandler}
          value={studentInfo.schoolName}
          type="text"
          placeholder="School name (required)"
        />
        <div id="school-name-error" className="error"></div>
      </Form.Group>

      <Form.Group className="mb-2" controlId="course">
        <Form.Control
          onChange={changeInputHandler}
          value={studentInfo.course}
          type="text"
          placeholder="Course (required)"
          maxLength={40}
        />
        <div id="course-error" className="error"></div>
      </Form.Group>
      <Form.Group className="mb-2" controlId="yearLevel">
        {/* <Form.Select
          value={studentInfo.yearLevel}
          onChange={onChange}
          aria-label="Year Level"
        >
          <option>Year Level</option>
          <option value="1st Year">1st Year</option>
          <option value="2nd Year">2nd Year</option>
          <option value="3rd Year">3rd Year</option>
          <option value="4th Year">4th Year</option>
        </Form.Select> */}
        <div id="year-level-error" className="error"></div>
      </Form.Group>
    </Form>
  );
}

export default SchoolInformationForm;
