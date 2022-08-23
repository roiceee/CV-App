import React from "react";
import Container from "react-bootstrap/esm/Container";
import GeneralInformationForm from "./form-components/generalInformation";
import Header from "./header";
import { useState, useCallback } from "react";
import SchoolInformationForm from "./form-components/schoolInformationForm";
import IdContainer from "./id-components/idContainer";
import defaultIcon from "../../assets/default-photo.jpg";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

function BodyContainer() {
  const defaultStudentInformation = {
    name: "",
    email: "",
    address: "",
    schoolName: "Roice University",
    course: "",
    photo: defaultIcon,
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
    <Container>
      <Header />
      <Row>
      <Col md={5}>
        <GeneralInformationForm
          studentInfo={studentInfo}
          changeInputHandler={changeInputHandler}
        />
        <SchoolInformationForm
          studentInfo={studentInfo}
          changeInputHandler={changeInputHandler}
        />
      </Col>
      <Col md={7}>
        <IdContainer studentInfo={studentInfo} />
      </Col>
      </Row>
    </Container>
  );
}

export default BodyContainer;
