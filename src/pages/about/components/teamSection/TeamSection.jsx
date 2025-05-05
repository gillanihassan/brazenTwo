import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import teamLogo from "../../../../assets/images/about/team/teamLogo.png";
import styles from "./styles.module.css";

const teamMembers = [
  { role: "FOUNDER", name: "Bradley Hope" },
  { role: "FOUNDER", name: "Tom Wright" },
  { role: "STAFF", name: "Nawaliba Bowman" },
  { role: "STAFF", name: "Ryan Ho" },
  { role: "STAFF", name: "Marianejoel Gonzales" },
  { role: "STAFF", name: "Lucy Wood" },
  { role: "STAFF", name: "Clair Urban" },
  { role: "STAFF", name: "Megan Dean" },
  { role: "STAFF", name: "Noor Amzal Lattif" },
  { role: "STAFF", name: "Golda Arthur" },
  { role: "STAFF", name: "Ribhu Kanasegaren" },
  { role: "STAFF", name: "Kaylon Kamczula" },
  { role: "STAFF", name: "Georgia Gee" },
  { role: "STAFF", name: "Sooklin Kim" },
  { role: "STAFF", name: "Ben Walsh" },
  { role: "STAFF", name: "Neha Wadia" },
  { role: "STAFF", name: "Amber Lee Williams" },
  { role: "STAFF", name: "Annie Kakao" },
  { role: "PARTNERS", name: "Kim Ghattas" },
  { role: "PARTNERS", name: "Michael Petrohu" },
  { role: "PARTNERS", name: "Neelofar Hedayat" },
  { role: "PARTNERS", name: "Nicky Woolf" },
  { role: "PARTNERS", name: "Timothy McLaughlin" },
  { role: "PARTNERS", name: "Zach Dorfman" },
  { role: "ADVISORS", name: "David Grann" },
  { role: "ADVISORS", name: "Glenn Greenwald" },
  { role: "REPRESENTATIVES", name: "Jake Levy" },
  { role: "REPRESENTATIVES", name: "Owen Rosenbaum" },
];

const TeamSection = () => {
  return (
    <Container
      fluid
      className="py-5"
      style={{ backgroundColor: "rgb(239, 240, 240)" }}
    >
      <Row>
        <Col className="d-flex justify-content-center mb-5">
          <Image alt="Team Logo" src={teamLogo} />
        </Col>
      </Row>

      <div className="d-flex justify-content-center align-items-center">
        <ul className="list-unstyled">
          {teamMembers.map((member, index) => (
            <li key={index} className="mb-2">
              <div className={`${styles.heading} me-4 d-inline-block text-end`}>
                {member.role}
              </div>
              <div className={`${styles.text} d-inline-block`}>
                {member.name}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default TeamSection;
