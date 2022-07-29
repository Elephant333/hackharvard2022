import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigator() {
  return (
    <Navbar sticky="top" bg="dark" variant="dark" expand="lg" style={{ fontFamily: 'zig' }}>
      <Container>
        <Navbar.Brand href="#home">HackHarvard</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#welcome">
              Welcome
            </Nav.Link>
            <Nav.Link href="#apply">
              Apply
            </Nav.Link>
            <Nav.Link href="#tracks">
              Tracks
            </Nav.Link>
            <Nav.Link href="#prizes">
              Prizes
            </Nav.Link>
            <Nav.Link href="#schedule">
              Schedule
            </Nav.Link>
            <Nav.Link href="#faq">
              FAQ
            </Nav.Link>
            <Nav.Link href="#speakers">
              Speakers
            </Nav.Link>
            <Nav.Link href="#sponsors">
              Sponsors
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigator;
