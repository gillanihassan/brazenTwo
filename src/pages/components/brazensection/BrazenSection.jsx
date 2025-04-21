import React from "react";
import styles from "./styles.module.css";
import { Container, Row, Col } from "react-bootstrap";

export default function BrazenSection() {
  return (
    <div className={`${styles.mainDiv}`}>
      <Container>
        <Row className="align-items-center text-center text-md-start">
          {/* Left Text */}
          <Col md={6} className="">
            <p className={`${styles.customPara}`}>
              Our storytelling platform, delivering podcasts,
              <br />
              short documentaries, and audiobooks.
            </p>
          </Col>

          {/* Right Branding */}
          <Col md={6}>
            <h2 className={`${styles.customHeading}`}>
              BRAZEN
              <span className="text-danger">.</span>FM
            </h2>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
