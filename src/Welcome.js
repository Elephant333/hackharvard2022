import React from 'react';
import Typical from 'react-typical';
import styles from './styles/Welcome.module.css';

function Welcome() {
  return (
    <main className={styles.main}>
      {/* eslint-disable max-len */}
      <p className={styles.welcomeText}>
        {' '}
        <Typical
          loop={1}
          wrapper="p"
          steps={[
            'Welcome to HackHarvard 2022! Join us for the seventh iteration of HackHarvard, a 36-hour free hackathon hosted by Harvard University students. For the first time in three years, we will be returning to a fully in-person hackathon!',
            0,
          ]}
        />
        <br />
        <br />
        <Typical
          loop={1}
          wrapper="p"
          steps={[
            'This year, our theme is Control, Alt, Create. It’s time to get retro and take inspiration from the past: whether that means harkening to an early technological age, or booting up an old, forgotten project to give it a new, creative twist.',
            0,
          ]}
        />
      </p>

      {/* <div className={styles.welcomeText}>
        Welcome to HackHarvard 2022! Join us for the seventh iteration of HackHarvard, a 36-hour free hackathon hosted by Harvard University students. For the first time in three years, we will be returning to a fully in-person hackathon!
        <br />
        <br />
        This year, our theme is Control, Alt, Create. It’s time to get retro and take inspiration from the past: whether that means harkening to an early technological age, or booting up an old, forgotten project to give it a new, creative twist.
      </div> */}
      {/* eslint-enable max-len */}
    </main>
  );
}

export default Welcome;
