import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Teamimage from "../../../assets/images/team/teamimage.png";
import styles from "./styles.module.css";

export default function TeamSection() {
  return (
    <div className={`${styles.mainDiv}`}>
      <Container>
        <Row className="align-items-center">
          {/* Left - Image */}
          <Col md={6}>
            <Image
              src={Teamimage}
              alt="Team Members"
              className={`${styles.customImage}`}
            />
          </Col>

          {/* Right - Text */}
          <Col md={6}>
            <h3 className={`${styles.customHeading}`}>
              Breathing life into stories
              <br />
              that challenge and inspire<span className="text-danger">.</span>
            </h3>
            <p className={`mb-4 ${styles.customPara}`}>
              We create content from high-stakes investigations, to premium
              scripted projects and groundbreaking collaborations with leading
              artists, journalists, and directors.
            </p>
            <a
              href="#"
              className={`text-decoration-none ${styles.customAnchor}`}
            >
              <span className="me-2">&#8594;</span> MEET THE WHOLE TEAM
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
