import React from 'react';
import welcomeBackground from './assets/images/welcomeBackground.png';

function Welcome() {
  return (
    <div className="App">
      <div>
        <img src={welcomeBackground} alt="" />
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
  );
}

export default Welcome;
