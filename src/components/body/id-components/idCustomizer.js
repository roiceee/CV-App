import React, { useCallback } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Form from "react-bootstrap/esm/Form";
import fonts from "./fonts";

function IdCustomizer({ idProperties, setIdProperties }) {

  const inputChangeHandler = useCallback((e) => {
    const { id, value } = e.target;
    
    setIdProperties((idProperties) => ({
      ...idProperties,
      [id]: value,
    }));
  }, []);

  return (
    <Container className="mt-3" style={{ fontSize: "0.8rem" }}>
      <h6>Color</h6>
      <Row className="row-cols-3">
        <Form.Group controlId="borderColor" className="mb-3">
          <Form.Label>Border Color</Form.Label>
          <Form.Control
            type="color"
            className="form-control-color"
            value={idProperties.borderColor}
            onChange={inputChangeHandler}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="outerColor" className="mb-3">
          <Form.Label>BG Color #1</Form.Label>
          <Form.Control
            type="color"
            className="form-control-color"
            value={idProperties.outerColor}
            onChange={inputChangeHandler}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="innerColor" className="mb-3">
          <Form.Label>BG Color #2</Form.Label>
          <Form.Control
            type="color"
            className="form-control-color"
            value={idProperties.innerColor}
            onChange={inputChangeHandler}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="outerTextColor" className="mb-3">
          <Form.Label>Text Color #1</Form.Label>
          <Form.Control
            type="color"
            className="form-control-color"
            value={idProperties.outerTextColor}
            onChange={inputChangeHandler}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="innerTextColor" className="mb-3">
          <Form.Label>Text Color #2</Form.Label>
          <Form.Control
            type="color"
            className="form-control-color"
            value={idProperties.innerTextColor}
            onChange={inputChangeHandler}
          ></Form.Control>
        </Form.Group>
      </Row>
      <Row className="mt-1">
        <h6>Font Style</h6>
        <Form.Group controlId="headerFont" className="mb-3">
          <Form.Label>School Name Font</Form.Label>
          <Form.Select
            aria-label="Header Font"
            onChange={inputChangeHandler}
            value={idProperties.headerFont}
          >
            <option>{idProperties.headerFont}</option>
            {fonts.map((font, index) => {
              return (
                <option value={font} key={index}>
                  {font}
                </option>
              );
            })}
          </Form.Select>
        </Form.Group>
        <Form.Group controlId="bodyFont" className="mb-2">
          <Form.Label>Body Font</Form.Label>
          <Form.Select
            aria-label="Body Font"
            onChange={inputChangeHandler}
            value={idProperties.bodyFont}
          >
            
            <option>{idProperties.bodyFont}</option>
            {fonts.map((font, index) => {
              return (
                <option value={font} key={index}>
                  {font}
                </option>
              );
            })}
          </Form.Select>
        </Form.Group>
      </Row>
    </Container>
  );
}

export default IdCustomizer;
