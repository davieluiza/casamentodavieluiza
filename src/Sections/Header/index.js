import {useState} from "react";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css";

const Header = () => {
    return (
        <Container
            style={
                {
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "row",
                    alignItems: "center"
                }
            }
        >
            <h1 className={"h1-title"}>Davi e Luiza</h1>
            <Navbar collapseOnSelect expand="lg" className="dropdown-button">
                <NavDropdown id="basic-navbar-nav" title={"Navegue pelo site"}>
                    <NavDropdown.Item href="#action/3.1">Nossa história </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                        O evento
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Ajuda</NavDropdown.Item>
                    <NavDropdown.Divider/>
                    <NavDropdown.Item href="#action/3.4">
                        Lista de presença
                    </NavDropdown.Item>
                </NavDropdown>
            </Navbar>
        </Container>
    );
};

export default Header;
