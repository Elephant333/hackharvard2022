import React from 'react';
import styles from './styles/Tracks.module.css';

function Tracks() {
  return (
    <main className={styles.main}>
      <h1 className={styles.titleText}>TRACKS</h1>
      <div className={styles.education}>
        <div className={styles.trackContainer}>
          <div className={styles.front}>
            EDUCATION
          </div>
          <div className={styles.back}>
            The description for the education track goes here!
          </div>
        </div>
      </div>
      <div className={styles.entertainment}>
        <div className={styles.trackContainer}>
          <div className={styles.front}>
            ENTERTAINMENT
          </div>
          <div className={styles.front}>
            BBB
          </div>
        </div>
      </div>
      <div className={styles.lifehack}>LIFEHACK</div>
    </main>
  );
}

export default Tracks;
