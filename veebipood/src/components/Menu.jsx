import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import englishFlag from "../assets/english.png";
import estonianFlag from "../assets/estonian.png";

function Menu() {
  const { t, i18n } = useTranslation();

  const changeLanguageEN = () => {
    i18n.changeLanguage("en");
    localStorage.setItem("keel", "en");
  }

  const changeLanguageET = () => {
    i18n.changeLanguage("et");
    localStorage.setItem("keel", "et");
  }
  
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">Veebipood</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/seaded">Seaded</Nav.Link>
            <Nav.Link as={Link} to="/ostukorv">{t("menu.cart")}</Nav.Link>
            <Nav.Link as={Link} to="/osta-kinkekaart">Kinkekaardid</Nav.Link>
            <Nav.Link as={Link} to="/kalkulaator">Kalkulaator</Nav.Link>
            <Nav.Link as={Link} to="/kaart">Kaart</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/api-home">APId</Nav.Link>
            <Nav.Link as={Link} to="/halda">Haldamine</Nav.Link>
            <Nav.Link as={Link} to="/arrays">Arrayd</Nav.Link>
            <Nav.Link as={Link} to="/lisa-toode">KODUS: teha lisamine</Nav.Link>
            <Nav.Link as={Link} to="/email">Email</Nav.Link>
            {/* <button onClick={changeLanguageEN}>English</button>
            <button onClick={changeLanguageET}>Eesti</button> */}

            <img className="ikoon" src={englishFlag} onClick={changeLanguageEN} alt="" />
            <img className="ikoon" src={estonianFlag} onClick={changeLanguageET} alt="" />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;