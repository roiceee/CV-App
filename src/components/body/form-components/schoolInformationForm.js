import React, { useCallback } from "react";
import Form from "react-bootstrap/Form";
import {
  debouncedValidateRequiredInput,
  debouncedValidateInput,
  debouncedValidateExactLength,
} from "./validation";

function SchoolInformationForm({
  course,
  setCourse,
  yearLevel,
  setYearLevel,
  lrn,
  requiredLrnLength,
  setLrn,
  schoolName,
  setSchoolName
}) {
  const changeInputHandler = useCallback((e) => {
    const value = e.target.value;
    const targetID = e.target.id;
    switch (targetID) {
      case "formCourse":
        setCourse(value);
        debouncedValidateRequiredInput(e, "course-error");
        break;
      case "formYearLevel":
        setYearLevel(value);
        debouncedValidateRequiredInput(e, "year-level-error");
        break;
      case "formLrn":
        setLrn(value);
        debouncedValidateInput(e, "lrn-error");
        debouncedValidateExactLength(e, requiredLrnLength, "lrn-error");
        break;
        case "formSchoolName":
        setSchoolName(value);
        debouncedValidateRequiredInput(e, "school-name-error");
        break;
    }
  }, []);

  return (
    <Form className="mt-4">
        <h6>School Information</h6>

        <Form.Group className="mb-3" controlId="formSchoolName">
        <Form.Control
          onChange={changeInputHandler}
          value={schoolName}
          type="text"
          placeholder="School name (required)"
        />
        <div id="school-name-error" className="error"></div>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formCourse">
        <Form.Control
          onChange={changeInputHandler}
          value={course}
          type="text"
          placeholder="Course (required)"
        />
        <div id="course-error" className="error"></div>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formYearLevel">
        <Form.Select
          value={yearLevel}
          onChange={changeInputHandler}
          aria-label="Year Level"
        >
          <option>Year Level</option>
          <option value="1st Year">1st Year</option>
          <option value="2nd Year">2nd Year</option>
          <option value="3rd Year">3rd Year</option>
          <option value="4th Year">4th Year</option>
        </Form.Select>
        <div id="year-level-error" className="error"></div>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formLrn">
        <Form.Control
          onChange={changeInputHandler}
          value={lrn}
          type="number"
          placeholder="12-digit LRN"
        />
        <div id="lrn-error" className="error"></div>
      </Form.Group>
    </Form>
  );
}

export default SchoolInformationForm;
