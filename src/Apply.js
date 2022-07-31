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
          <h2>APPLY HERE!</h2>
          <h2>APPLICATIONS ARE OPEN!</h2>
          <h2>APPLY HERE!</h2>
        </div>
      </Marquee>

      <button className={styles.applyButton} type="submit">APPLY</button>
      <div className={styles.deadlines}>
        <div>
          <h2>ROUND 1</h2>
          <span>DEADLINE</span>
          <h1>SEP. 4TH</h1>
        </div>
        <div>
          <h2>ROUND 2</h2>
          <span>DEADLINE</span>
          <h1>SEPT. 28TH</h1>
        </div>
      </div>
    </div>
  );
}

export default Apply;
