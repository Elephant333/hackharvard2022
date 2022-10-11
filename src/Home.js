import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import styles from './styles/Home.module.css';
import headImage from './assets/images/home-head.png';

function Home() {
  const calculateTimeLeft = () => {
    const year = new Date().getFullYear();
    const difference = +new Date(`10/15/${year}`) - +new Date();

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]}
        .
        {interval}
        {' '}
      </span>,
    );
  });
  return (
    <main className={styles.main}>
      <div className={styles.mainGrid}>
        <img className={styles.headImage} src={headImage} alt="" />
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>
            <div id={styles.largeView}>
              <span>HackHarvard</span>
              <span>2022</span>
            </div>
            <div className={styles.date}>October 14-16</div>
            <div id={styles.smallView}>
              <span>Hack</span>
              <span>Harvard</span>
              <span>2022</span>
            </div>
          </h1>
          <div className={styles.countdown}>
            {timerComponents.length ? timerComponents : <span>Countdown Has Ended!</span>}
          </div>
          <div className={styles.date} id={styles.smallDate}>October 14-16</div>
        </div>
      </div>
      <div className={styles.stripes}>
        <span />
        <span />
        <span />
      </div>
      <a className={styles.applyButton} href="https://forms.gle/2omfCFuzWdiETk5RA" target="_blank" rel="noreferrer">APPLY</a>
      <div className={styles.countdown} id={styles.smallCount}>
        {timerComponents.length ? timerComponents : <span>Time to Hack!</span>}
      </div>
      <Marquee
        speed={100}
        gradientWidth={150}
        className={styles.marquee}
      >
        <div className={styles.applyMovingText}>
          <h2>HACKHARVARD 2022!</h2>
          <h2>APPLICATIONS CLOSED</h2>
          <h2>HACKHARVARD 2022!</h2>
          <h2>APPLICATIONS CLOSED</h2>
        </div>
      </Marquee>
    </main>
  );
}

export default Home;
