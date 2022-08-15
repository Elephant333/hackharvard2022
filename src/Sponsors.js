import React from 'react';
import {
  FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaGithubSquare,
} from 'react-icons/fa';
import {
  MdOutlineEmail,
} from 'react-icons/md';
import styles from './styles/Sponsors.module.css';
import aneta from './assets/images/anetaBTC_logo_text_white.png';
import mlh from './assets/images/mlh-logo-color.png';
import scm from './assets/images/SCM_logo.png';

function Sponsors() {
  return (
    <main className={styles.main}>
      <h1 className={styles.titleText}>SPONSORS</h1>
      <div className={styles.sponsorsBox}>
        <a href="https://anetabtc.io/" target="_blank" rel="noreferrer" className={styles.sponsorLogos} id={styles.aneta}><img className={styles.sponsorLogos} src={aneta} alt="anetaBTC" /></a>
        <a href="https://www.scm-lp.com/" target="_blank" rel="noreferrer" className={styles.sponsorLogos} id={styles.scm}><img className={styles.sponsorLogos} src={scm} alt="SCM" /></a>
        <a href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2023-season&utm_content=white" target="_blank" rel="noreferrer" className={styles.sponsorLogos} id={styles.mlh}><img className={styles.sponsorLogos} src={mlh} alt="MLH" /></a>
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
            <a id={styles.icon} href="mailto:team@hackharvard.io" rel="noreferrer"><MdOutlineEmail /></a>
            <a id={styles.icon} href="https://www.linkedin.com/company/hackharvardcollege/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a id={styles.icon} href="https://github.com/hackharvard/hackharvard.github.io" target="_blank" rel="noreferrer"><FaGithubSquare /></a>
            { /* eslint-enable */ }
          </div>
          <p id={styles.text}>APPLICATIONS OPEN!</p>
        </div>
        <p id={styles.smallText}>MADE WITH &hearts; FROM HACKHARVARD TEAM</p>
        <a id={styles.smallText} href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" target="_blank" rel="noreferrer">MLH CODE OF CONDUCT</a>
      </div>
    </main>
  );
}

export default Sponsors;