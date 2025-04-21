import React from "react";
import styles from "./styles.module.css";
import { Container, Row, Col } from "react-bootstrap";

export default function BrazenSectionTwo() {
  return (
    <div className={`${styles.mainDiv}`}>
      <Container>
        <Row className="align-items-center text-center text-md-start">
          {/* Left Text */}
          <Col md={6} className="">
            <p className={`${styles.customPara}`}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Bespoke creative
              solutions for brands and
              <br />
              organizations. From branded content to full-scale media
              <br />
              campaigns, we tell stories that resonate.
            </p>
          </Col>

          {/* Right Branding */}
          <Col md={6}>
            <h2 className={`${styles.customHeading}`}>
              BRAZEN STUDIOS
              <span className="text-danger">.</span>
            </h2>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
