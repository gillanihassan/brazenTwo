import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import PressLogo from "../../../../assets/images/about/press/PressLogo.png";
import arrow from "../../../../assets/images/about/press/arrow.png";
import styles from "./styles.module.css";

const podcasts = [
  { title: "‘CRAZY RICH ASIANS’ AUTHOR", year: 2023, lang: "ENG" },
  { title: "TOM WRIGHT ON THE HARBINGER SHOW", year: 2023, lang: "ENG" },
  { title: "THE FALL GUY", year: 2023, lang: "ENG" },
  { title: "NIGHT OF SHOW", year: 2023, lang: "ENG" },
  { title: "DYNAMITE DOUG", year: 2023, lang: "ENG" },
  { title: "THE SOUND: MYSTERY OF HAVANA SYNDROME", year: 2023, lang: "ENG" },
  { title: "CORINNA AND THE KING", year: 2022, lang: "ENG & ESP" },
  { title: "PEOPLE LIKE US", year: 2022, lang: "ENG" },
  { title: "KABUL FALLING", year: 2023, lang: "ENG" },
];

const PressSection = () => {
  return (
    <Container
      fluid
      className={`d-flex justify-content-center  ${styles.mainContainer}`}
    >
      <Col md={9}>
        <Image src={PressLogo} className="mb-5" />

        {podcasts.map((podcast, index) => (
          <Row
            key={index}
            className={`py-3 align-items-center ${styles.customRow}`}
          >
            <Col xs={12} sm={6} md={6} className={`${styles.title}`}>
              {podcast.title}
            </Col>
            <Col xs={8} sm={4} md={4} className={`${styles.yearLang}`}>
              Podcast &nbsp;&nbsp; {podcast.year} &nbsp;&nbsp; {podcast.lang}
            </Col>
            <Col xs={4} sm={2} md={2} className="text-end text-danger">
              <Image src={arrow} className={`${styles.customImage}`} />
            </Col>
          </Row>
        ))}
      </Col>
    </Container>
  );
};

export default PressSection;
