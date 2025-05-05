import { Container, Row, Col, Image } from "react-bootstrap";
import London from "../../../../assets/images/contact/office/London.png";
import Singapore from "../../../../assets/images/contact/office/Singapore.png";
import SingaporeTime from "../../../../assets/images/contact/office/SingaporeTime.png";
import LondonTime from "../../../../assets/images/contact/office/LondonTime.png";
import Circle from "../../../../assets/images/contact/office/Circle.png";
import styles from "./styles.module.css";

const Office = () => {
  const locations = [
    {
      city: Singapore,
      address: `160 Robinson Road #24-09 Singapore Business \nFederation Center  \nSingapore, 068914`,
      email: "tom@projectbrazen.com",
      time: SingaporeTime,
    },
    {
      city: London,
      address: `K208 Bermondsey Biscuit Factory Southwark,\nLondon SE16 4DG`,
      phone: "+44 20 45310997",
      email: "bradley@projectbrazen.com",
      time: LondonTime,
    },
  ];

  return (
    <div style={{ backgroundColor: "rgb(239, 240, 240)" }}>
      <Container className="py-5">
        <Row>
          {locations.map((loc, idx) => (
            <Col key={idx} md={6} className="mb-4">
              <Image src={loc.city} className={`mt-5 ${styles.customImage}`} />
              <p className={`${styles.paraOne}`}>{loc.address}</p>
              {loc.phone && <p className={` ${styles.phone}`}>{loc.phone}</p>}
              <p className={`${styles.paraTwo}`}>{loc.email}</p>
              <Image src={Circle} className="mt-3" />
              <Image src={loc.time} className="mt-3 mx-3" />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Office;
