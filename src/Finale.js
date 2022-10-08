import React from 'react';
import Marquee from 'react-fast-marquee';
import styles from './styles/Finale.module.css';
import headImage from './assets/images/home-head.png';

export default function Finale() {
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
          <div className={styles.date} id={styles.smallDate}>
            October 14-16
          </div>
          <div className={styles.finalMessage}>Congratulations!</div>
        </div>
      </div>
      <div className={styles.stripes}>
        <span />
        <span />
        <span />
      </div>
      <Marquee speed={100} gradientWidth={150} className={styles.marquee}>
        <div className={styles.applyMovingText}>
          <h2>HACKHARVARD 2022!</h2>
          <h2>COMPLETED!</h2>
          <h2>HACKHARVARD 2022!</h2>
          <h2>COMPLETED!</h2>
        </div>
      </Marquee>
    </main>
  );
}
