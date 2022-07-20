import React from 'react';
import styles from './Home.module.css';
import headImage from './images/home-head.png';

function Home() {
  return (
    <main className={styles.main}>
      <img className={styles.headImage} src={headImage} alt="" />
    </main>
  );
}

export default Home;
