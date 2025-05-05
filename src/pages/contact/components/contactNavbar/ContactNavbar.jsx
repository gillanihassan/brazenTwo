import { Navbar, Nav, Container, Image } from "react-bootstrap";
import Logo from "../../../../assets/images/about/navbar/NavLogo.png";
import Circle from "../../../../assets/images/about/navbar/navCircle.png";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

function ContactNavbar() {
  return (
    <Navbar expand="lg" variant="light" className={`${styles.navbar}`}>
      <Container fluid className={`${styles.customContainer}`}>
        <Navbar.Brand as={Link} to="/">
          <Image src={Logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to="/about"
              className={`mx-4 ${styles.customLink}`}
            >
              About
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/project"
              className={`mx-4 ${styles.customLink}`}
            >
              Projects
            </Nav.Link>
            <Nav.Link href="#shop" className={`mx-4 ${styles.customLink}`}>
              Shop
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              className={`mx-4 ${styles.customLink}`}
            >
              <span>
                <Image src={Circle} className="px-3" />
              </span>
              Contact
            </Nav.Link>
            <Nav.Link href="#brazen" className={`mx-4 ${styles.customLink}`}>
              Brazen
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ContactNavbar;
