import { Container, Row, Col, Card, Image } from "react-bootstrap";
import styles from "./styles.module.css";
import gatewayLogo from "../../../../assets/images/project/gateWay/gatewayLogo.png";
import gatewayArrow from "../../../../assets/images/project/gateWay/gatewayArrow.png";

const GateWay = () => {
  const data = [
    {
      title: "GATEWAY: COCAINE, MURDER & …",
      year: 2023,
      type: "Podcast",
      lang: "ENG",
      duration: "6 EPS",
    },
    {
      title: "GATEWAY: COCAINE, MURDER & …",
      year: 2023,
      type: "Podcast",
      lang: "ENG",
      duration: "6 EPS",
    },
    {
      title: "GATEWAY: COCAINE, MURDER & …",
      year: 2023,
      type: "Podcast",
      lang: "ENG",
      duration: "6 EPS",
    },
    // Repeat or map as needed
  ];

  return (
    <div className={`${styles.mainDiv}`}>
      <Container fluid="sm" className={`${styles.mainContainer}`}>
        <Col>
          <Image src={gatewayLogo} className="ms-2" />
        </Col>

        <Row>
          {data.map((item, idx) => (
            <Col key={idx} md={4}>
              <Card
                className={`border-0 bg-transparent p-0 ${styles.mainCard}`}
              >
                <Card.Body>
                  <Card.Title className={`${styles.cardTitle}`}>
                    {item.title}
                  </Card.Title>
                  <Card.Text
                    className={`d-flex justify-content-between align-items-center mt-4 ${styles.cardText}`}
                  >
                    <span>
                      {item.type} {item.year} {item.lang} {item.duration}
                    </span>
                    <Image src={gatewayArrow} />
                  </Card.Text>
                  <div className={`pb-2 ${styles.bottomDiv}`}></div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default GateWay;
