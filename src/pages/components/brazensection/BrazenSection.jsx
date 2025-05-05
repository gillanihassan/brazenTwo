import React from "react";
import styles from "./styles.module.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import BrazenFm from "../../../assets/images/brazenbakground/BrazanFm.png";

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
            <Image src={BrazenFm} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
