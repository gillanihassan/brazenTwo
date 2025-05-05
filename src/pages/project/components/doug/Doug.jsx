import { Container, Row, Col, Image } from "react-bootstrap";
import image from "../../../../assets/images/project/doug/image.png";
import Logo from "../../../../assets/images/project/doug/dougLogo.png";
import logoTwo from "../../../../assets/images/project/doug/dynamite.png";
import styles from "./styles.module.css";

const Doug = () => {
  return (
    <Container className={`${styles.mainContainer}`}>
      {/* Top Row: Back and Host Info */}
      <Row className={`${styles.rowOne}`}>
        <Col>
          <a href="#" className={`${styles.customLink}`}>
            ← Back to Projects
          </a>
        </Col>
      </Row>

      {/* Podcast Metadata */}
      <Row className={`${styles.rowTwo}`}>
        <Col>
          <small className={`${styles.small}`}>
            Podcast&nbsp;&nbsp;2023&nbsp;&nbsp;English
          </small>
        </Col>
      </Row>

      {/* Title */}
      <Row className={`${styles.rowThree}`}>
        <Col>
          <Image fluid src={logoTwo} />
        </Col>
        <Col className={`text-center  ${styles.customImage}`}>
          <Image fluid src={Logo} className="ms-5" />
        </Col>
      </Row>

      {/* Main Image */}
      <Row className="mt-3">
        <Col>
          <Image src={image} fluid className="rounded-5  " />
        </Col>
      </Row>
    </Container>
  );
};

export default Doug;
