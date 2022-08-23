import React, { useCallback } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import IdPreview from "./idPreview";
import Button from "react-bootstrap/esm/Button";
import defaultIcon from "../../../assets/default-photo.jpg";
import { resetForms } from "../form-components/validation";
import html2canvas from "html2canvas";

function IdContainer({ studentInfo, idProperties, setStudentInfo }) {

  const resetStudentInfo = useCallback(() => {
    setStudentInfo({
      name: "",
      email: "",
      address: "",
      schoolName: "Roice University",
      course: "",
      photo: defaultIcon,
    });
    resetForms();
  }, []);

  const saveId = () => {
    html2canvas(document.getElementById("id-image")).then((canvas) => {
      let a = document.createElement("a");
      a.download = `${studentInfo.name.split(" ")[0]}'s ID.png`;
      a.href = canvas.toDataURL("image/png");
      a.click();
    });
  };

  return (
    <Container className="mt-4">
      <h6>ID Preview</h6>
      <hr></hr>
      <Row>
        <Col className="mx-auto mx-sm-0">
          <IdPreview
            idProperties={idProperties}
            studentInfo={studentInfo}
          />
        </Col>
        <Col>
          <Row className="d-flex flex-column gap-1 mt-3 mx-auto align-items-center">
            <Button
              className="id-button"
              variant="action"
              type="button"
              onClick={saveId}
            >
              Save
            </Button>
            <Button
              className="id-button"
              variant="tertiary"
              type="button"
              onClick={resetStudentInfo}
            >
              Reset
            </Button>
          </Row>
          <Row className="mt-3">
            <p id="notice">
              Hi! This is a practice project. There would be no collection of
              data. However, please take precautions in putting your personal
              information online.
            </p>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default IdContainer;
