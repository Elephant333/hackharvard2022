import React from 'react';
import styles from './styles/Welcome.module.css';
import welcomeBackground from './assets/images/welcomeBackground.png';

function Welcome() {
  return (
    // currently working on getting the text over the screen
  // <main className={styles.main}>
  // <div className="App">
    <div className="welcome-text">
      <div className="welcome-image">
        <img src={welcomeBackground} alt="" />
      </div>
      <div className="welcome-text-on-image">
        <p>Welcome to HackHarvard 2022!</p>
        <p>Join us for the seventh iteration of HackHarvard,</p>
        <p>a 36-hour free hackathon hosted by Harvard University students.</p>
        <p>This year, we are planning for an in-person hackathon for U.S. students</p>
        <p>and a virtual hackathon for international students.</p>
        <p>This year, our theme is Control, Alt, Create. </p>
        <p>It’s time to get retro and take inspiration from the past:</p>
        <p>whether that means hearkening to an early technological age,</p>
        <p>or booting up an old, forgotten project to give it a new, creative twist.</p>
        ;
      </div>
    </div>
  // </div>
  // </main>
  );
}

export default Welcome;
