import React from 'react';
import styles from './styles/Highlight.module.css';
import project from './assets/images/bookProject.png';

export default function Highlight() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <img className={styles.image} src={project} alt="Project" />
        <div style={{ textAlign: 'center' }}>
          Hello
          <div />
        </div>
      </div>
    </main>
  );
}
