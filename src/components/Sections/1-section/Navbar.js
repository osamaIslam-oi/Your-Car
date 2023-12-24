import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartButton from "../../Cart/CartButton";
import styles from "./Navbar.module.css";
import { useState } from "react";

function TopNav(props) {
  const [navBar, setnavBar] = useState(false);

  const chagne = () => {
    if (window.scrollY >= 56) {
      setnavBar(true);
    } else {
      setnavBar(false);
    }
  };
  window.addEventListener("scroll", chagne);

  return (
    <Navbar
      bg="bg-body fixed-top "
      className={navBar ? "navbar active" : "nabar"}
      expand="lg"
    >
      <Container>
        <Navbar.Brand href="#home" className={styles.logo}>
          YourCar
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ">
            <Nav.Link
              className="me-5 link-light section1-text hover"
              onClick={() => window.location.replace("/#home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              className="me-5 link-light section1-text hover"
              onClick={() => window.location.replace("/#about")}
            >
              About
            </Nav.Link>
            <Nav.Link
              className="me-5 link-light section1-text hover"
              onClick={() => window.location.replace("/#service")}
            >
              Services
            </Nav.Link>
            <Nav.Link
              className="me-5 link-light section1-text  hover"
              onClick={() => window.location.replace("/#car")}
            >
              Cars
            </Nav.Link>
            <Nav.Link
              className="me-5 link-light section1-text hover"
              onClick={() => window.location.replace("/#contact")}
            >
              Contact us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <CartButton onClickShopButton={props.openSidebar} />
      </Container>
    </Navbar>
  );
}

export default TopNav;
