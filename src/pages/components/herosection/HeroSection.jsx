import React from "react";
import { Container, Navbar, Nav, Image } from "react-bootstrap";
import styles from "./styles.module.css";
import brazenBackground from "../../../assets/images/brazenbakground/brazanBackground.png";

export default function HeroSection() {
  return (
    <div className={`${styles.heroContainer}`}>
      {/* Background Image */}
      <Image src={brazenBackground} className={styles.heroBg} />

      {/* Dark Overlay */}
      <div className={styles.overlay} />

      {/* Navbar */}
      <Navbar
        expand="md"
        variant="dark"
        className="z-3 position-absolute top-0 w-100 px-3"
      >
        <Container
          fluid
          className="d-flex justify-content-between align-items-center"
        >
          <Navbar.Brand className="text-white fw-bold">
            Project Brazen
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="navbar-nav"
            className={`${styles.navToggle}`}
          />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto text-center">
              <Nav.Link href="#" className={`${styles.customLink}`}>
                About
              </Nav.Link>
              <Nav.Link href="#" className={`${styles.customLink}`}>
                Projects
              </Nav.Link>
              <Nav.Link href="#" className={`${styles.customLink}`}>
                Shop
              </Nav.Link>
              <Nav.Link href="#" className={`${styles.customLink}`}>
                Contact
              </Nav.Link>
              <Nav.Link href="#" className={`${styles.customLink}`}>
                Brazen
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
