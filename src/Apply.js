import React from 'react';
import Marquee from 'react-fast-marquee';
import styles from './styles/Apply.module.css';

function Apply() {
  return (
    <div className={styles.background}>
      <div className={styles.header}>
        APPLICATIONS
      </div>
      <Marquee
        speed={100}
        gradientWidth={150}
      >
        <div className={styles.applyMovingText}>
          <h2>APPLICATIONS ARE OPEN!</h2>
          <h2>APPLY TODAY!</h2>
          <h2>APPLICATIONS ARE OPEN!</h2>
          <h2>APPLY TODAY!</h2>
        </div>
      </Marquee>

      <a className={styles.applyButton} href="https://forms.gle/2omfCFuzWdiETk5RA" target="_blank" rel="noreferrer">APPLY</a>
      <div className={styles.deadlines}>
        <div id={styles.id}>
          <div style={{ filter: 'blur(4px)', margin: 0, padding: 0 }}>
            <h2>ROUND 1</h2>
            <span>DEADLINE</span>
            <h1>SEP. 4TH</h1>
          </div>
          <div className={styles.closedContainer}>
            <p className={styles.closed}>
              CLOSED
            </p>
          </div>
        </div>
        <div>
          <h2>ROUND 2</h2>
          <span>DEADLINE</span>
          <h1>SEP. 28TH</h1>
        </div>
      </div>
    </div>
  );
}

export default Apply;
