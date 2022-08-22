import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import IdPreview from "./idPreview";

function IdContainer({studentInfo}) {


  return (
    <Container className="mt-4">
      <Row>
        <h5>ID Preview</h5>
        <hr></hr>
        <div className="mx-auto d-block">
            {/* this is where the id is previewed */}
            <IdPreview studentInfo={studentInfo}/>
        </div>
      </Row>
    </Container>
  );
}

export default IdContainer;
