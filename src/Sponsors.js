import React from 'react';
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
    </main>
  );
}

export default Sponsors;
