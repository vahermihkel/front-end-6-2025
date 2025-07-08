import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import englishFlag from "../assets/englishFlag.png";
import estonianFlag from "../assets/estonianFlag.png";
import "../App.css";

function NavigationBar() {
  const { t, i18n } = useTranslation();

  const changeLanguageEN = () => {
    i18n.changeLanguage("en");
    localStorage.setItem("keel", "en");
  };

  const changeLanguageET = () => {
    i18n.changeLanguage("et");
    localStorage.setItem("keel", "et");
  };

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">{t("navbar.home")}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/cart">{t("navbar.cart")}</Nav.Link>
            <Nav.Link as={Link} to="/map">{t("navbar.map")}</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/contact">{t("navigationbar.contact")}</Nav.Link>
            <Nav.Link as={Link} to="/admin">{t("navbar.admin")}</Nav.Link>
            <Nav.Link as={Link} to="/login">{t("navbar.login")}</Nav.Link>
            <Nav.Link as={Link} to="/signup">{t("navbar.signup")}</Nav.Link>
            <img className="icon" src={englishFlag} onClick={changeLanguageEN} alt="EN" />
            <img className="icon" src={estonianFlag} onClick={changeLanguageET} alt="ET" />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;