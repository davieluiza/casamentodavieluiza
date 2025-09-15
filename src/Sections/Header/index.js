import {Container, Navbar, NavDropdown, Nav, Image} from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import Logo from './../../assets/logo.png';

const Header = () => {
    return (
        <Navbar
            expand="lg"
            className="bg-body-tertiary d-flex align-items-center border-bottom shadow-sm"
        >
            <Container fluid className="d-flex justify-content-lg-between">
                <Navbar.Brand href="/casamentodavieluiza"
                              className="d-flex flex-row justify-content-center align-items-center">
                    <Image src={Logo} alt="casamentodavieluiza" width="50px"/>
                    <h1 className="h1-title">Davi e Luiza</h1>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav" aria-disabled={true}>
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">O casamento</Nav.Link>
                        <Nav.Link href="#nossa-historia">Nossa história</Nav.Link>
                        <Nav.Link href="/casamentodavieluiza/presentear">Lista de Presentes</Nav.Link>
                        <NavDropdown title="Mais informações" id="basic-nav-dropdown">
                            <NavDropdown.Item
                                href="https://api.whatsapp.com/send/?phone=5594993055241" target={"_blank"}>Dúvidas</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="/#sobre-o-evento">
                                Sobre o evento
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
