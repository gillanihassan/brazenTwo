import { Container, Row, Col, Image } from "react-bootstrap";
import styles from "./styles.module.css";
import EpOne from "../../../../assets/images/project/episode/EpOne.png";
import EpTwo from "../../../../assets/images/project/episode/EpTwo.png";
import EpThree from "../../../../assets/images/project/episode/EpThree.png";
import EpFour from "../../../../assets/images/project/episode/EpFour.png";
import EpFive from "../../../../assets/images/project/episode/EpFive.png";
import imgOne from "../../../../assets/images/project/episode/imgOne.png";
import imgTwo from "../../../../assets/images/project/episode/imgTwo.png";
import imgThree from "../../../../assets/images/project/episode/imgThree.png";
import imgFour from "../../../../assets/images/project/episode/imgFour.png";
import circleOne from "../../../../assets/images/project/episode/circleOne.png";
import circleTwo from "../../../../assets/images/project/episode/circleTwo.png";
import button from "../../../../assets/images/project/episode/button.png";

function EpisodeSection() {
  return (
    <Container className={`${styles.mainContainer}`}>
      <Row className="d-flex justify-content-between">
        <Col md={7} className={`${styles.colOne}`}>
          <p className={`${styles.customPara}`}>
            For 50 years, Douglas Latchford was the world’s premier expert on
            Cambodian, art, supplying priceless statues to Western museums and
            rich collectors. But his fame masked a dirty secret. Douglas had
            colluded with the Khmer Rouge, a genocidial regime, to loot
            Cambodia’s entire cultural heritage. As the country descended into
            bloodshed, Douglas stole almost everything.
          </p>
          <div className="d-flex  align-items-end" style={{ height: "100px" }}>
            <Image src={button} />
          </div>
        </Col>

        {/* Right Side - Episode List */}
        <Col md={5} className={`${styles.colTwo}`}>
          <Image src={EpOne} className="py-3" />

          <div className={`py-3 ${styles.customDiv}`}>
            <Image src={EpTwo} />
            <div className="d-flex justify-content-between align-items-center">
              <Image src={imgOne} />
              <Image src={circleOne} />
            </div>
          </div>

          <div className={`py-3 ${styles.customDiv}`}>
            <Image src={EpThree} />
            <div className="d-flex justify-content-between align-items-center">
              <Image src={imgTwo} />
              <Image src={circleTwo} />
            </div>
          </div>

          <div className={`py-3 ${styles.customDiv}`}>
            <Image src={EpFour} />
            <div className="d-flex justify-content-between align-items-center">
              <Image src={imgThree} />
              <Image src={circleTwo} />
            </div>
          </div>

          <div className={`py-3 ${styles.customDiv}`}>
            <Image src={EpFive} />
            <div className="d-flex justify-content-between align-items-center">
              <Image src={imgFour} />
              <Image src={circleTwo} />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default EpisodeSection;
