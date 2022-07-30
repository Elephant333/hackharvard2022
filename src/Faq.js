import React from 'react';
import styles from './styles/Faq.module.css';

function Faq() {
  return (
    <div className={styles.background}>
      <div className={styles.wrapper}>
        <div className={styles.gridDivs}>
          <p />
        </div>
        <div className={styles.gridDivs} id={styles.Faqs}>
          <h1>hey</h1>
        </div>
        <div className={styles.gridDivs} id={styles.Num}>
          <p>1</p>
        </div>
        <div className={styles.gridDivs} id={styles.Header}>
          <p>TEAMS</p>
        </div>
        <div className={styles.gridDivs}>
          <h1>hey</h1>
        </div>
        <div className={styles.gridDivs} id={styles.TeamsInfo}>
          <h1>hello</h1>
        </div>
        <div className={styles.gridDivs} id={styles.Num}>
          <p>2</p>
        </div>
        <div className={styles.gridDivs} id={styles.Header}>
          <p>GENERAL</p>
        </div>
        <div className={styles.gridDivs}>
          <h1>hello</h1>
        </div>
        <div className={styles.gridDivs} id={styles.GeneralInfo}>
          <h1>hi</h1>
        </div>
        <div className={styles.gridDivs} id={styles.Num}>
          <p>3</p>
        </div>
        <div className={styles.gridDivs} id={styles.Header}>
          <p>LOGISTICS</p>
        </div>
        <div className={styles.gridDivs}>
          <h1>hi</h1>
        </div>
        <div className={styles.gridDivs} id={styles.LogisticsInfo}>
          <h1>hey</h1>
        </div>
        <div className={styles.gridDivs}>
          none
        </div>
        <div className={styles.gridDivs} id={styles.footer}>
          none
        </div>
      </div>
    </div>
  );
}

export default Faq;
