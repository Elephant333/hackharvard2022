import React from 'react';
import Marquee from 'react-fast-marquee';
import styles from './styles/Apply.module.css';

function Apply() {
  return (
    <div className={styles.background}>
      <div className={styles.header}>
        APPLICATIONS
      </div>
<<<<<<< HEAD
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
=======
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
>>>>>>> e56b915632c33b72eafb2917830e7f0a308453ba
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
