import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './styles/Navigator.module.css';

function Navigator() {
  return (
    <Navbar sticky="top" bg="dark" variant="dark" expand="lg" style={{ fontFamily: 'zig' }}>
      <Container>
        <a id="mlh-trust-badge" className={styles.mlhLogo} href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2023-season&utm_content=white" target="_blank" rel="noreferrer">
          <img src="https://s3.amazonaws.com/logged-assets/trust-badge/2023/mlh-trust-badge-2023-white.svg" alt="Major League Hacking 2023 Hackathon Season" />
        </a>
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
