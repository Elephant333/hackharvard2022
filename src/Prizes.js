import React from 'react';
import styles from './styles/Prizes.module.css';
import trophy from './assets/images/trophy.png';

function Prizes() {
  return (
    <main className={styles.main}>
      <h1 className={styles.titleText}>TRACKS &amp; PRIZES</h1>
      <div className={styles.prizeBox}>
        {/* eslint-disable max-len */}
        <div className={styles.prizeTitle}>
          What are tracks?
        </div>
        <div className={styles.prizeDescription}>
          Tracks are areas of focus that you may choose to hack in. If you submit your project to a track, you are eligible to win the track-specific prize.
        </div>
        <div className={styles.prizeTitle}>
          Do I have to submit a track?
        </div>
        <div className={styles.prizeDescription}>
          No, you can submit a project that is unrelated to the tracks provided.
        </div>
        <div className={styles.prizeTitle}>
          Will there be swag and prizes?
        </div>
        <div className={styles.prizeDescription}>
          Of course! We will be providing swag to all participants who submitted a project, as well as prizes to all winning projects.
        </div>
        <div className={styles.prizeTitle}>
          Do I have to submit a project?
        </div>
        <div className={styles.prizeDescription}>
          You do not have to submit a project, though we highly recommend you do! You will not be eligible to receive swag if you do not submit a project.
        </div>
        {/* eslint-enable max-len */}
      </div>
      <img src={trophy} alt="Trophy" className={styles.trophy} />
    </main>
  );
}

export default Prizes;
