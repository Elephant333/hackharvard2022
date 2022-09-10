import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './styles/Navigator.module.css';
import logo from './assets/images/HH22_logo_transparent_square.png';

function Navigator() {
  return (
    <Navbar collapseOnSelect sticky="top" bg="dark" variant="dark" expand="xl" style={{ fontFamily: 'zig' }}>
      <Container>
        <a id="mlh-trust-badge" className={styles.mlhLogo} href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2023-season&utm_content=white" target="_blank" rel="noreferrer">
          <img src="https://s3.amazonaws.com/logged-assets/trust-badge/2023/mlh-trust-badge-2023-white.svg" alt="Major League Hacking 2023 Hackathon Season" />
        </a>
        <Navbar.Brand href="#home" id={styles.brand}>
          <img className={styles.hhlogo} src={logo} alt="" />
          HackHarvard
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#welcome" className="ms-auto">
              Welcome
            </Nav.Link>
            <Nav.Link href="#apply" className="ms-auto">
              Apply
            </Nav.Link>
            <Nav.Link href="#tracks" className="ms-auto">
              Tracks
            </Nav.Link>
            <Nav.Link href="#prizes" className="ms-auto">
              Prizes
            </Nav.Link>
            <Nav.Link href="#schedule" className="ms-auto">
              Schedule
            </Nav.Link>
            <Nav.Link href="#faq" className="ms-auto">
              FAQ
            </Nav.Link>
            <Nav.Link href="#speakers" className="ms-auto">
              Speakers
            </Nav.Link>
            <Nav.Link href="#sponsors" className="ms-auto">
              Sponsors
            </Nav.Link>
            <Nav.Link href="#archive" className="ms-auto">
              Archive
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigator;
