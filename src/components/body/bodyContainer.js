import React from "react";
import Container from "react-bootstrap/esm/Container";
import GeneralInformationForm from "./form-components/generalInformation";
import Header from "./header";
import { useState } from "react";
import SchoolInformationForm from "./form-components/schoolInformationForm";

function BodyContainer() {
  const [firstName, setFirstName] = useState("");
  const [middleInitial, setMiddleInitial] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [course, setCourse] = useState("");
  const [yearLevel, setYearLevel] = useState("");
  const [lrn, setLrn] = useState("");
  const [schoolName, setSchoolName] = useState("Roice University");

  return (
    <Container className="mt-2">
      <Header />
      <GeneralInformationForm
        firstName={firstName}
        middleInitial={middleInitial}
        lastName={lastName}
        email={email}
        phoneNumber={phoneNumber}
        course={course}
        setFirstName={setFirstName}
        setMiddleInitial={setMiddleInitial}
        setLastName={setLastName}
        setEmail={setEmail}
        setPhoneNumber={setPhoneNumber}
        setCourse={setCourse}
      />
      <SchoolInformationForm 
      course={course} 
      yearLevel={yearLevel}
      lrn={lrn}
      requiredLrnLength={12}
      schoolName={schoolName}
      setCourse={setCourse}
      setYearLevel={setYearLevel}
      setLrn={setLrn}
      setSchoolName={setSchoolName}
      />
    </Container>
  );
}

export default BodyContainer;
