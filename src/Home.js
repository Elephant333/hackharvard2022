import React from 'react';
import styles from './Home.module.css';
import headImage from './images/home-head.png';
import Navigator from './Navigator';

function Home() {
  return (
    <main className={styles.main}>
      <Navigator />
      <img className={styles.headImage} src={headImage} alt="" />
    </main>
  );
}

export default Home;
