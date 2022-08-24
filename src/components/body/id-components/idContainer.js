import React, { useCallback } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import IdPreview from "./idPreview";
import Button from "react-bootstrap/esm/Button";
import defaultIcon from "../../../assets/default-photo.jpg";
import { resetForms } from "../form-components/validation";
import html2canvas from "html2canvas";
import { validateGeneralInformation } from "../form-components/generalInformation";
import { validateSchoolInformation } from "../form-components/schoolInformationForm";


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
      a.download = "ID.png";
      a.href = canvas.toDataURL("image/png");
      a.click();
    });
  };

  const saveButtonEvent = useCallback(
    async() => {
        const isValid = await validateAllForms();
        if (!isValid) {
          return;
        }
        saveId();
    }, [])

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
              onClick={saveButtonEvent}
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

async function validateAllForms() {
  return new Promise(resolve => {
    const formsThatNeedValidation = document.querySelectorAll('.need-validation');
    formsThatNeedValidation.forEach((form) => {
      validateGeneralInformation(form.id);
      validateSchoolInformation(form.id);
    })
    formsThatNeedValidation.forEach((form => {
      if (form.classList.contains('invalid-form')) {
        resolve(false);
        return;
      } 
    }))
    resolve(true);
  })
}

export default IdContainer;
