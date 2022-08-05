import React from 'react';
import {
  FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaGithubSquare,
} from 'react-icons/fa';
import styles from './styles/Sponsors.module.css';

function Sponsors() {
  return (
    <main className={styles.main}>
      <h1 className={styles.titleText}>SPONSORS</h1>
      <div className={styles.sponsorsBox}>
        Coming soon...
      </div>
      <p className={styles.sponsorsBottom}>
        If you would like to sponsor this event, please reach out
        to us at sponsors@hackharvard.io!
      </p>
      <div className={styles.footer}>
        <div id={styles.footerTop}>
          <p id={styles.text}>OCTOBER 14-16 2022</p>
          <div id={styles.socials}>
            { /* eslint-disable */ }
            <a id={styles.icon} href="https://www.facebook.com/hackharvard/" target="_blank" rel="noreferrer"><FaFacebookSquare /></a>
            <a id={styles.icon} href="https://www.instagram.com/hackharvardcollege/" target="_blank" rel="noreferrer"><FaInstagramSquare /></a>
            <a id={styles.icon} href="https://www.linkedin.com/company/hackharvardcollege/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a id={styles.icon} href="https://github.com/hackharvard/hackharvard.github.io" target="_blank" rel="noreferrer"><FaGithubSquare /></a>
            { /* eslint-enable */ }
          </div>
          <p id={styles.text}>APPLICATIONS OPEN 8/15!</p>
        </div>
        <p id={styles.smallText}>MADE WITH &hearts; FROM HACKHARVARD TEAM</p>
        <a id={styles.smallText} href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" target="_blank" rel="noreferrer">MLH CODE OF CONDUCT</a>
      </div>
    </main>
  );
}

export default Sponsors;
