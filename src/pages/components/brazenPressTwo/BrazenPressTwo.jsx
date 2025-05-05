import { Container, Row, Col, Card, Image } from "react-bootstrap";
import styles from "./styles.module.css";
import BrazenPress from "../../../assets/images/brazanPressTwo/BrazenPressLogo.png";
import Arrow from "../../../assets/images/brazanPressTwo/Arrow.png";

const BrazenPressTwo = () => {
  const data = [
    {
      title: "‘CRAXY RICH ASIANS’ CO-AUTHOR TO PEN FAT LEONAR...",
      year: 2023,
      type: "Podcast",
      lang: "ENG",
      duration: "6 EPS",
    },
    {
      title: "TOM WRIGHT ON THE HARBINGER SHOW ",
      year: 2023,
      type: "Podcast",
      lang: "ENG",
      duration: "6 EPS",
    },
    {
      title: "THE FALL GUY",
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
          <Image src={BrazenPress} className="ms-2" />
        </Col>

        <Row className="mt-5">
          {data.map((item, idx) => (
            <Col key={idx} md={6} lg={4} className="mt-2">
              <Card className="h-100 border-0">
                <Card.Header className="border-0">
                  <Card.Title className={`${styles.cardTitle}`}>
                    {item.title}
                  </Card.Title>
                </Card.Header>
                <Card.Footer className="border-0 d-flex justify-content-between align-items-end h-100">
                  <div>
                    {item.type} {item.year} {item.lang} {item.duration}
                  </div>
                  <Image src={Arrow} alt="image" />
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default BrazenPressTwo;
