import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Row";
import IdPreview from "./idPreview";

function IdContainer({ studentInfo, idProperties }) {

  return (
    <Container className="mt-4">
      <h6>ID Preview</h6>
      <hr></hr>
      <Row>
        <Col className="mx-auto d-block">
          <IdPreview idProperties={idProperties} studentInfo={studentInfo} />
        </Col>
      </Row>
    </Container>
  );
}

export default IdContainer;
