import React from 'react';
import styles from './Home.module.css';
import headImage from './assets/images/home-head.png';
import Navigator from './Navigator';

function Home() {
  return (
    <main className={styles.main}>
      <Navigator />
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
      <div className={styles.banner}>HackHarvard 2022! Apply today!</div>
    </main>
  );
}

export default Home;
