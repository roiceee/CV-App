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
        <IdContainer studentInfo={studentInfo} idProperties={idProperties}/>
      </Col>
      </Row>
    </Container>
  );
}

export default BodyContainer;