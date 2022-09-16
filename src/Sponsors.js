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
import sonr from './assets/images/sonrLogo.png';
import gCloud from './assets/images/gCloud.png';
import locket from './assets/images/locket.png';
import ll from './assets/images/leadingLearners.png';
import aa from './assets/images/assemblyai.png';
import meta from './assets/images/meta.png';
import echo3d from './assets/images/echo3d.png';
// import mathpix from './assets/images/mathpix.png';
import sig from './assets/images/SIG.png';

function Sponsors() {
  return (
    <main className={styles.main}>
      <h1 className={styles.titleText}>SPONSORS</h1>
      <div className={styles.sponsorsBox}>
        <a href="https://about.facebook.com/" target="_blank" rel="noreferrer" className={styles.sponsorLogos} id={styles.meta}><img className={styles.sponsorLogos} src={meta} alt="Meta" /></a>
        {/* <a href="https://mathpix.com/" target="_blank" rel="noreferrer" className={styles.sponsorLogos} id={styles.mathpix}><img className={styles.sponsorLogos} src={mathpix} alt="Mathpix" /></a> */}
        <a href="https://anetabtc.io/" target="_blank" rel="noreferrer" className={styles.sponsorLogos} id={styles.aneta}><img className={styles.sponsorLogos} src={aneta} alt="anetaBTC" /></a>
        <a href="https://sig.com/" target="_blank" rel="noreferrer" className={styles.sponsorLogos} id={styles.sig}><img className={styles.sponsorLogos} src={sig} alt="SIG" /></a>
        <a href="https://www.scm-lp.com/" target="_blank" rel="noreferrer" className={styles.sponsorLogos} id={styles.scm}><img className={styles.sponsorLogos} src={scm} alt="SCM" /></a>
        <a href="https://apps.apple.com/us/app/locket-widget/id1600525061" target="_blank" rel="noreferrer" className={styles.sponsorLogos} id={styles.locket}><img className={styles.sponsorLogos} src={locket} alt="Locketcamera" /></a>
        <a href="https://www.assemblyai.com/" target="_blank" rel="noreferrer" className={styles.sponsorLogos} id={styles.aa}><img className={styles.sponsorLogos} src={aa} alt="AssemblyAI" /></a>
        <a href="https://www.sonr.io/" target="_blank" rel="noreferrer" className={styles.sponsorLogos} id={styles.sonr}><img className={styles.sponsorLogos} src={sonr} alt="Sonr.io" /></a>
        <a href="https://rsvp.withgoogle.com/events/google-cloud-speaker-series/hackharvard" target="_blank" rel="noreferrer" className={styles.sponsorLogos} id={styles.gCloud}><img className={styles.sponsorLogos} src={gCloud} alt="Google Cloud" /></a>
        <a href="https://www.leading-learners.com/" target="_blank" rel="noreferrer" className={styles.sponsorLogos} id={styles.ll}><img className={styles.sponsorLogos} src={ll} alt="Leading Learners" /></a>
        <a href="https://www.echo3d.co/" target="_blank" rel="noreferrer" className={styles.sponsorLogos} id={styles.echo3d}><img className={styles.sponsorLogos} src={echo3d} alt="echo3D" /></a>
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
