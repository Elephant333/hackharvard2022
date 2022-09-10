import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import styles from './styles/Navigator.module.css';
import logo from './assets/images/HH22_logo_transparent_square.png';

function Navigator() {
  return (
    <Navbar
      collapseOnSelect
      sticky="top"
      bg="dark"
      variant="dark"
      expand="xl"
      style={{ fontFamily: 'zig' }}
    >
      <Container>
        <a
          id="mlh-trust-badge"
          className={styles.mlhLogo}
          href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2023-season&utm_content=white"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://s3.amazonaws.com/logged-assets/trust-badge/2023/mlh-trust-badge-2023-white.svg"
            alt="Major League Hacking 2023 Hackathon Season"
          />
        </a>
        <Navbar.Brand href="#home" id={styles.brand}>
          <img className={styles.hhlogo} src={logo} alt="" />
          HackHarvard
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Navigator;
