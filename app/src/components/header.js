// import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
// import '../index.css'

import React from "react";

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">React-JsonSchema-Form</Navbar.Brand>
    <Nav className="me-auto">
      {/* <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link> */}
    </Nav>
    </Container>
  </Navbar>

    // <div className="col-12 header" style={{ color: "red", textAlign: "center", fontSize: "3em" }}>React-JsonSchema-Form</div>
  )
}

export default Header;