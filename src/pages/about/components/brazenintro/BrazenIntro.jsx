import { Container, Row, Col } from "react-bootstrap";
import styles from "./styles.module.css";

const BrazenIntro = () => {
  return (
    <Container fluid className={` ${styles.customContainer}`}>
      <Row>
        <Col className={`${styles.customRow}`}>
          <p className={`${styles.customPara}`}>
            Founded by bestselling authors Bradley Hope and Tom Wright in 2021,
            Project Brazen is a hub for the world's{" "}
            <span style={{ color: "#FF330B", fontWeight: "bold" }}>
              top creators and journalists.
            </span>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default BrazenIntro;
