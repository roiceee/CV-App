import React from "react";
import Container from "react-bootstrap/esm/Container";
import GeneralInformationForm from "./form-components/generalInformation";
import Header from "./header";
import { useState } from "react";
//import SchoolInformationForm from "./form-components/schoolInformationForm";

function BodyContainer() {
  let defaultStudentInformation = {
    name: "",
    email: "",
    city: "",
    province: "",
    course: "",
    yearLevel: "",
    lrn: "",
    schoolName: "Roice University",
  };
  const [studentInfo, setStudentInfo] = useState(defaultStudentInformation);

  return (
    <Container className="mt-2">
      <Header />
      <GeneralInformationForm
        studentInfo={studentInfo}
        setStudentInfo={setStudentInfo}
      />
      {/* <SchoolInformationForm
        studentInfo={studentInfo}
        setStudentInfo={setStudentInfo}
      /> */}
    </Container>
  );
}

export default BodyContainer;
