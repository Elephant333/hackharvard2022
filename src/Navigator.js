import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Navigator() {
  // const history = useHistory();

  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand to="/" style={{ color: 'white' }}>HackHarvard</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/welcome">Welcome</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/apply">Apply</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/tracks">Tracks</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/prizes">Prizes</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/schedule">Schedule</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/faq">FAQ</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/speakers">Speakers</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/sponsors">Sponsors</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigator;
