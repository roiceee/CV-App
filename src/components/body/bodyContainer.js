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

function BodyContainer() {
  const defaultStudentInformation = {
    name: "",
    email: "",
    address: "",
    schoolName: "",
    course: "",
    photo: defaultIcon,
  };
  const [studentInfo, setStudentInfo] = useState(defaultStudentInformation);

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
          <Row className="mt-3">
            <p id="notice">
              Hi! There would be no collection of
              data. However, please take precautions in putting your personal
              information online.
            </p>
          </Row>
        </Col>
        <Col md={7}>
          <IdContainer
            studentInfo={studentInfo}
            setStudentInfo={setStudentInfo}
            defaultStudentInformation={defaultStudentInformation}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default BodyContainer;
