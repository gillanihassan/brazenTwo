import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import styles from "./styles.module.css";
import imageOne from "../../../../assets/images/about/documentarie/imageOne.png";
import imageTwo from "../../../../assets/images/about/documentarie/imageTwo.png";
import imageThree from "../../../../assets/images/about/documentarie/imageThree.png";

function Documentarie() {
  return (
    <Container fluid className={` ${styles.mainContainer}`}>
      <Row className={`justify-content-center ${styles.customRow}`}>
        <Col md={6} className="">
          <div className={`d-flex justify-content-center ${styles.imageDiv}`}>
            <Image src={imageOne} className={`${styles.imageOne}`} />
            <Image src={imageTwo} className={`${styles.imageTwo}`} />
          </div>
          <div className="d-flex flex-column align-items-center justify-content-center mt-5">
            <p className={`text-center ${styles.paraOne}`}>
              Have a story worth telling? Project Brazen is always looking for
              <span style={{ color: "#FF330B" }}>
                {" "}
                ambitious, narrative non-fiction projects{" "}
              </span>{" "}
              to produce as podcasts, documentaries and other formats.
            </p>
            <p className={`text-center ${styles.paraTwo}`}>
              We work and collaborate with journalists all over the world, to
              help develop their narratives in an engaging medium to captive
              audiences. Feel free to get in touch with an idea – even if it’s
              some reporting you have done previously but you feel could be the
              start of an exciting project.
            </p>
            <Image src={imageThree} />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Documentarie;
