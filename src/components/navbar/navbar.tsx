import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./navabar.css";

const NavBar = () => {
  return (
    <Navbar bg="black" variant="dark" expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand-name">
          Alejandro Valenzuela
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto nav-links">
            <Nav.Link as={Link} to="/">
              Inicio
            </Nav.Link>
            <Nav.Link as={Link} to="/about-me">
              Sobre mi
            </Nav.Link>
            <Nav.Link as={Link} to="/cv">
              CV
            </Nav.Link>
            <Nav.Link as={Link} to="/servicios">
              Servicios
            </Nav.Link>
            <Nav.Link as={Link} to="/portafolio">
              Portafolio
            </Nav.Link>
            <Nav.Link as={Link} to="/contacto">
              Contacto
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link
              as={Link}
              to="/descargar-cv"
              className="btn btn-success text-black download-cv"
            >
              Descargar CV
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
