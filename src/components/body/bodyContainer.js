import React from "react";
import Container from "react-bootstrap/esm/Container";
import GeneralInformationForm from "./form-components/generalInformation";
import Header from "./header";
import { useState } from "react";
import SchoolInformationForm from "./form-components/schoolInformationForm";
import IdContainer from "./id-components/idContainer";
import defaultIcon from "../../assets/default-photo.jpg";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
/*eslint-disable*/

function BodyContainer() {
  const defaultStudentInformation = {
    name: "",
    email: "",
    address: "",
    schoolName: "Roice University",
    course: "",
    photo: defaultIcon,
  };

  const defaultIdProperties = {
    outerColor: "#fff",
    innerColor: "#800000",
    innerTextColor: "#fff",
    outerTextColor: "#000000",
    headerFont: "Verdana",
    bodyFont: "Verdana"
  }

  const [studentInfo, setStudentInfo] = useState(defaultStudentInformation);
  const [idProperties, setIdProperties] = useState(defaultIdProperties);


  return (
    <Container>
      <Header />
      <Row>
      <Col md={5}>
        <GeneralInformationForm
          studentInfo={studentInfo}
          setStudentInfo={setStudentInfo}
        />
        <SchoolInformationForm
          studentInfo={studentInfo}
          setStudentInfo={setStudentInfo}
        />
      </Col>
      <Col md={7}>
        <IdContainer studentInfo={studentInfo} idProperties={idProperties} setStudentInfo={setStudentInfo}/>
      </Col>
      </Row>
    </Container>
  );
}

export default BodyContainer;
