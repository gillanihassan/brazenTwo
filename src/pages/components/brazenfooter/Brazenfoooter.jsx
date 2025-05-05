import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import styles from "./styles.module.css";
import footerLogo from "../../../assets/images/footer/footerLogo.png";
import Arrow from "../../../assets/images/footer/Arrow.png";

export default function FooterSection() {
  return (
    <div>
      <Container fluid className={` py-5 ${styles.footerSection}`}>
        <h2 className={`${styles.footerHeading}`}>
          We don’t know what’s next.
          <br />
          But it’s sure to be surprising.
          <br />
          Join us, as we go deeper.
        </h2>

        {/* Arrow + Bold CTA */}
        <Row className={`${styles.customRow}`}>
          <Col>
            <Image src={Arrow} className={` ${styles.arrow}`} />
            <Image src={footerLogo} className={` ${styles.footerLogo}`} />
          </Col>
        </Row>
        {/* Divider */}
        <hr className="border-light" />

        <Row className="pt-0">
          <Col sm={6} md={4} className="text-start p-0 order-2 order-md-1">
            <a
              className={`text-white text-decoration-none mx-5 ${styles.links}`}
            >
              © Project Brazen 2022
            </a>
          </Col>
          <Col sm={6} md={4} className="order-1 order-md-2">
            <a
              href="#"
              className={`text-white text-decoration-none mx-2 ${styles.links}`}
            >
              Twitter
            </a>
            <a
              href="#"
              className={`text-white text-decoration-none mx-2 ${styles.links}`}
            >
              Instagram
            </a>
            <a
              href="#"
              className={`text-white text-decoration-none mx-2 ${styles.links}`}
            >
              Discord
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
