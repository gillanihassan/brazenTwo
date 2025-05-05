import React from "react";
import styles from "./styles.module.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import Logo from "../../../assets/images/brazenbakground/BrazanStudio.png";

export default function BrazenSectionTwo() {
  return (
    <div className={`${styles.mainDiv}`}>
      <Container>
        <Row className="align-items-center text-center text-md-start">
          {/* Left Text */}
          <Col md={6} className="">
            <p className={`${styles.customPara}`}>
              Bespoke creative solutions for brands and
              <br />
              organizations. From branded content to full-scale media
              <br />
              campaigns, we tell stories that resonate.
            </p>
          </Col>

          {/* Right Branding */}
          <Col md={6}>
            <Image src={Logo} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
