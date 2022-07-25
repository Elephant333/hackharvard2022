import React from 'react';
import styles from './styles/Tracks.module.css';

function Tracks() {
  return (
    <main className={styles.main}>
      <h1 className={styles.titleText}>TRACKS</h1>
      <div className={styles.trackContainer}>
        <div className={styles.education}>EDUCATION</div>
      </div>
      <div className={styles.entertainment}>ENTERTAINMENT</div>
      <div className={styles.lifehack}>LIFEHACK</div>
    </main>
  );
}

export default Tracks;
