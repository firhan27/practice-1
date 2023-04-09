import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Navbar, Button } from "react-bootstrap";
import "./Navbar.css";

const Header = () => {
  return (
    <Navbar bg="transparant navbar-expand-lg fixed-top p-2">
      <Container fluid>
        <div>
          <Navbar.Brand className="text-danger fs-2 Navbar-logo">Movielist</Navbar.Brand>
        </div>
        <div>
          <input type="search" placeholder="What do you want to watch?" className="Navbar-search" />
        </div>
        <div className="me-3">
          <Button variant="outline-danger" className="Navbar-button">
            Login
          </Button>
          <Button variant="danger" className="Navbar-button">
            Register
          </Button>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
