import React, { useState, useCallback } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import IdPreview from "./idPreview";
import Button from "react-bootstrap/esm/Button";
import { resetForms } from "../form-components/validation";
import html2canvas from "html2canvas";
import { validateGeneralInformation } from "../form-components/generalInformation";
import { validateSchoolInformation } from "../form-components/schoolInformationForm";
import IdCustomizer from "./idCustomizer";

function IdContainer({ studentInfo, setStudentInfo, defaultStudentInformation }) {
  const defaultIdProperties = {
    borderColor: "#800000",
    outerColor: "#FFFFFF",
    innerColor: "#800000",
    innerTextColor: "#FFFFFF",
    outerTextColor: "#000000",
    headerFont: "Verdana",
    bodyFont: "Verdana",
  };

  const [idProperties, setIdProperties] = useState(defaultIdProperties);

  const resetStudentInfo = useCallback(() => {
    setStudentInfo({...defaultStudentInformation});
    setIdProperties({...defaultIdProperties});
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

  const saveButtonEvent = useCallback(async () => {
    const isValid = await validateAllForms();
    if (!isValid) {
      return;
    }
    saveId();
  }, []);

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
          <IdCustomizer
            idProperties={idProperties}
            setIdProperties={setIdProperties}
          />
          <Row className="d-flex flex-column gap-2 mt-3 mx-auto align-items-center">
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
        </Col>
      </Row>
    </Container>
  );
}

async function validateAllForms() {
  return new Promise((resolve) => {
    const formsThatNeedValidation =
      document.querySelectorAll(".need-validation");
    formsThatNeedValidation.forEach((form) => {
      validateGeneralInformation(form.id);
      validateSchoolInformation(form.id);
    });
    formsThatNeedValidation.forEach((form) => {
      if (form.classList.contains("invalid-form")) {
        resolve(false);
        return;
      }
    });
    resolve(true);
  });
}

export default IdContainer;
