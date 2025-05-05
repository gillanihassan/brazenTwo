import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Award from "../../../../assets/images/about/award/Award.png";
import AwardLogo from "../../../../assets/images/about/award/AwardLogo.png";
import AwardPrize from "../../../../assets/images/about/award/AwardPrize.png";
import styles from "./styles.module.css";

// Sample image URL for laurel icon (replace with actual path if local)
const laurelImage = Award;

const AwardSection = () => {
  return (
    <Container fluid className={`text-start ${styles.mainContainer}`}>
      <Col md={5} className="text-center">
        <Image src={AwardLogo} className={`${styles.customImage}`} />
      </Col>

      <Row className="text-center ">
        {[1, 2, 3].map((item, index) => (
          <Col key={index} xs={12} sm={6} md={4} className="mb-4">
            <Image
              src={laurelImage}
              alt="Award Laurel"
              width={80}
              height={80}
              className={`mb-4 ${styles.award}`}
            />
            <Image src={AwardPrize} className="d-block mx-auto mb-1" />
            <p className={`mb-0 ${styles.paraOne}`}>
              DIRECTORS GUILD OF AMERICA
            </p>
            <p className={`${styles.paraTwo}`}>2023</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AwardSection;
