import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useTranslation } from 'react-i18next';


function AdminHome() {
  const { t } = useTranslation();

  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/admin/maintain-products">{t("admin-home.maintain-products")}</Nav.Link>
            <Nav.Link as={Link} to="/admin/add-product">{t("admin-home.add-product")}</Nav.Link>
            <Nav.Link as={Link} to="/admin/maintain-shops">{t("maintain-shops")}</Nav.Link>
            <Nav.Link as={Link} to="/admin/maintain-categories">{t("maintain-categories")}</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}


export default AdminHome;