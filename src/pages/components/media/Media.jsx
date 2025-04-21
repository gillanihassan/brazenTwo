import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./styles.module.css";

function WorldClock() {
  return (
    <Container fluid className={`p-5 ${styles.customContainer}`}>
      <h3 className={`${styles.customHeading}`}>
        Discovering new worlds<span style={{ color: "#FF3C00" }}>.</span>
      </h3>

      <Row className={`${styles.customRowOne}`}>
        <Col xs={4} sm={4} md={4} lg={4} xl={4} xxl={4} className="mt-5">
          <h4 className={`${styles.customRow}`}>LDN</h4>
          <p className={`${styles.customRow}`}>13:54</p>
        </Col>
        <Col xs={4} sm={4} md={4} lg={4} xl={4} xxl={4} className="mt-5">
          <h4 className={`${styles.customRow}`}>NYC</h4>
          <p className={`${styles.customRow}`}>8:54</p>
        </Col>
        <Col xs={4} sm={4} md={4} lg={4} xl={4} xxl={4} className="mt-5">
          <h4 className={`${styles.customRow}`}>SG</h4>
          <p className={`${styles.customRow}`}>21:54</p>
        </Col>
      </Row>

      <p className={`${styles.customPara}`}>
        From page to screen,{" "}
        <span style={{ color: "#FF3C00", fontWeight: "bold" }}>
          we craft stories
        </span>{" "}
        that shape culture and uncover hidden worlds. Film, television, books,
        documentaries, podcasts — our work pushes boundaries and ignites
        conversations around the globe
        <span style={{ color: "#FF3C00" }}>.</span>
      </p>
    </Container>
  );
}

export default WorldClock;
