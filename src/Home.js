import React from 'react';
import Marquee from 'react-fast-marquee';
import styles from './styles/Home.module.css';
import headImage from './assets/images/home-head.png';

function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.headImageContainer}>
        <img className={styles.headImage} src={headImage} alt="" />
      </div>
      <div className={styles.stripes}>
        <span />
        <span />
        <span />
      </div>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>
          <span>HackHarvard</span>
          <span>2022</span>
        </h1>
      </div>
      <Marquee
        speed={100}
        gradientWidth={150}
        className={styles.marquee}
      >
        <div className={styles.applyMovingText}>
          <h2>HACKHARVARD 2022!</h2>
          <h2>APPLY HERE!</h2>
          <h2>HACKHARVARD 2022!</h2>
          <h2>APPLY HERE!</h2>
        </div>
      </Marquee>
    </main>
  );
}

export default Home;
