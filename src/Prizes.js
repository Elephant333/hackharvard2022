import React from 'react';
import styles from './styles/Prizes.module.css';

function Prizes() {
  return (
    <main className={styles.main}>
      <h className={styles.titleText}>TRACKS &amp; PRIZES</h>
      <div className={styles.prizeBox}>
        {/* eslint-disable max-len */}
        <div className={styles.prizeTitle}>
          What are tracks?
        </div>
        <div className={styles.prizeDescription}>
          Tracks are areas of focus that you may choose to hack in. If you submit your project to a track, you are eligible to win the track-specific prize.
        </div>
        {/* eslint-enable max-len */}
      </div>
    </main>
  );
}

export default Prizes;
