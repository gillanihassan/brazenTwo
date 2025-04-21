import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./styles.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function BrazenPress() {
  return (
    <div className={` ${styles.mainDiv}`}>
      <h3 className={`${styles.customHeading}`}>
        Daring to go where others won’t<span className="text-danger">.</span>
      </h3>

      {/* Bold Project Titles */}
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
        <Col sm={4} md={4}>
          <h4 className={`${styles.customColumnHeadingOne}`}>
            FAT
            <br />
            LEONARD<span className="text-danger">.</span>
          </h4>
        </Col>
        <Col sm={4} md={4}>
          <h4 className={`${styles.customColumnHeadingOne}`}>
            THE
            <br />
            SOUND<span className="text-danger">.</span>
          </h4>
        </Col>
      </Row>

      {/* Latest Press Title */}
      <h3 className={`${styles.pressHeading}`}>
        LATEST PRESS<span className="text-danger">.</span>
      </h3>

      {/* Press Items */}
      <Row className="text-start">
        <Col md={4} className="mb-4">
          <h6 className={`${styles.customHeadingTwo}`}>
            ‘CRAXY RICH ASIANS’ <br /> CO-AUTHOR TO PEN FAT <br /> LEONAR…
          </h6>
          <p className={styles.customColumnPara}>
            News&nbsp;&nbsp;&nbsp;2022&nbsp;&nbsp;&nbsp;DEADLINE
          </p>
        </Col>

        <Col md={4} className="mb-4">
          <h6 className={`${styles.customHeadingTwo}`}>
            TOM WRIGHT ON THE <br /> HARBINGER SHOW
          </h6>
          <p className={styles.customColumnPara}>
            Podcast&nbsp;&nbsp;&nbsp;2021&nbsp;&nbsp;&nbsp;ENG
          </p>
        </Col>

        <Col md={4} className="mb-4">
          <h6 className={`${styles.customHeadingTwo}`}>THE FALL GUY</h6>
          <p className={styles.customColumnPara}>
            Article&nbsp;&nbsp;&nbsp;2021&nbsp;&nbsp;&nbsp;ENG
          </p>
        </Col>
      </Row>
    </div>
  );
}
