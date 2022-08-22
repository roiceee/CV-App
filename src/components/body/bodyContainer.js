import React from "react";
import Container from "react-bootstrap/esm/Container";
import GeneralInformationForm from "./form-components/generalInformation";
import Header from "./header";
import { useState, useCallback } from "react";
import SchoolInformationForm from "./form-components/schoolInformationForm";

function BodyContainer() {
  let defaultStudentInformation = {
    name: "",
    email: "",
    city: "",
    province: "",
    schoolName: "Roice University",
    course: "",
    yearLevel: "",
  };
  const [studentInfo, setStudentInfo] = useState(defaultStudentInformation);

  const changeInputHandler = useCallback((e) => {
    const { id, value } = e.target;
    setStudentInfo((studentInfo) => ({
      ...studentInfo,
      [id]: value,
    }));
  }, []);

  return (
    <Container className="mt-2">
      <Header />
      <GeneralInformationForm
        studentInfo={studentInfo}
        changeInputHandler={changeInputHandler}
      />
      <SchoolInformationForm
        studentInfo={studentInfo}
        changeInputHandler={changeInputHandler}
      />
    </Container>
  );
}

export default BodyContainer;
