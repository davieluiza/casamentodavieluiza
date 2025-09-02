import { Container, Navbar, NavDropdown, Nav } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import Title from "../../Components/Title";

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary d-flex align-items-center">
      <Container fluid className="d-flex justify-content-lg-between">
        <Navbar.Brand href="#home">
          <h1 className="h1-title">Davi e Luiza</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" aria-disabled={true}>
          <Nav className="ms-auto">
            <Nav.Link href="#home">O casamento</Nav.Link>
            <Nav.Link href="#nossa-historia">Nossa história</Nav.Link>
            <Nav.Link href="#sobre-o-evento">Sobre o evento</Nav.Link>
            <NavDropdown title="Mais informações" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Dúvidas</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/presentear">
                Lista de presentes
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
