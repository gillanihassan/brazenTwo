import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import styles from "./styles.module.css";
import footerLogo from "../../../assets/images/footer/footerLogo.png";

export default function FooterSection() {
  return (
    <div>
      <Container fluid className={`text-white py-5 ${styles.footerSection}`}>
        <h2 className={`${styles.footerHeading}`}>
          We don’t know what’s next.
          <br />
          But it’s sure to be surprising.
          <br />
          Join us, as we go deeper.
        </h2>

        {/* Arrow + Bold CTA */}
        <Row>
          <Col className={`${styles.footerLogo}`}>
            <Image src={footerLogo} />
          </Col>
        </Row>
        {/* Divider */}
        <hr className="border-light" />

        <Row className="pt-0">
          <Col md={6} className="text-start">
            <span className="mx-5"> © Project Brazen 2022</span>
            <a href="#" className="text-white text-decoration-none mx-2">
              Twitter
            </a>
            <a href="#" className="text-white text-decoration-none mx-2">
              Instagram
            </a>
            <a href="#" className="text-white text-decoration-none mx-2">
              Discord
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
