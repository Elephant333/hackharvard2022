import React from 'react';
import styles from './styles/Apply.module.css';

function Apply() {
  return (
    <div className={styles.background}>
      <div className={styles.header}>
        APPLICATIONS
      </div>
      <div className={styles.applyTextWrap}>
        <div className={styles.applyMovingText}>
          <h2>
            APPLICATIONS ARE OPEN! &nbsp; &nbsp;  &nbsp; &nbsp; APPLY NOW! &nbsp; &nbsp;
            APPLICATIONS ARE OPEN! &nbsp; &nbsp; APPLY NOW! &nbsp; &nbsp;
            APPLICATIONS ARE OPEN! &nbsp; &nbsp; APPLY NOW! &nbsp; &nbsp;
            APPLICATIONS ARE OPEN! &nbsp; &nbsp; APPLY NOW! &nbsp; &nbsp;
            APPLICATIONS ARE OPEN! &nbsp; &nbsp; APPLY NOW! &nbsp; &nbsp;
            APPLICATIONS ARE OPEN! &nbsp; &nbsp; APPLY NOW! &nbsp; &nbsp;
            APPLICATIONS ARE OPEN! &nbsp; &nbsp; APPLY NOW! &nbsp; &nbsp;
            APPLICATIONS ARE OPEN! &nbsp; &nbsp; APPLY NOW! &nbsp; &nbsp;
            APPLICATIONS ARE OPEN! &nbsp; &nbsp; APPLY NOW! &nbsp; &nbsp;
          </h2>
        </div>
      </div>
      <button className={styles.applyButton} type="submit">APPLY</button>
      <div className={styles.deadlines}>
        <div>
          <h2>ROUND 1</h2>
          <span>DEADLINE</span>
          <h1>AUG. 29TH</h1>
        </div>
        <div>
          <h2>ROUND 2</h2>
          <span>DEADLINE</span>
          <h1>SEPT. 19TH</h1>
        </div>
      </div>
    </div>
  );
}

export default Apply;
