import React from 'react';
import styles from './styles/Welcome.module.css';

function Welcome() {
  return (
    <main className={styles.main}>
      {/* eslint-disable max-len */}
      <div className={styles.welcomeText}>
        Welcome to HackHarvard 2022! Join us for the seventh iteration of HackHarvard, a 36-hour free hackathon hosted by Harvard University students. For the first time in three years, we will be returning to a fully in-person hackathon!
        <br />
        <br />
        This year, our theme is Control, Alt, Create. It’s time to get retro and take inspiration from the past: whether that means hearkening to an early technological age, or booting up an old, forgotten project to give it a new, creative twist.
      </div>
      {/* eslint-enable max-len */}
    </main>
  );
}

export default Welcome;
