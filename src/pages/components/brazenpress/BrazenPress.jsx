import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./styles.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function BrazenPress() {
  return (
    <div className={` ${styles.mainDiv}`}>
      <Container>
        <h3 className={`${styles.customHeading}`}>
          Daring to go where others won’t<span className="text-danger">.</span>
        </h3>
        <Row className={`${styles.customRowOne}`}>
          <Col sm={4} md={4}>
            <h4 className={`${styles.customColumnHeadingOne}`}>
              BILLION
              <br />
              DOLLAR
              <br />
              WHALE<span className="text-danger">.</span>
            </h4>
          </Col>
          <Col sm={4} md={4} className="mt-5">
            <h4 className={`${styles.customColumnHeadingOne}`}>
              FAT
              <br />
              LEONARD<span className="text-danger">.</span>
            </h4>
          </Col>
          <Col sm={4} md={4} className="mt-5">
            <h4 className={`${styles.customColumnHeadingOne}`}>
              THE
              <br />
              SOUND<span className="text-danger">.</span>
            </h4>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
