import React from 'react';
import styles from './styles/Highlight.module.css';
import project from './assets/images/bookProject.png';

export default function Highlight() {
  return (
    <main className={styles.main}>
      <div className={styles.mainGrid}>
        <img
          src={project}
          alt="Project"
          style={{ display: 'inline-block;', width: '100%' }}
        />
        <div style={{ textAlign: 'center' }}>
          <p>
            Project Education
            {' '}
            <br />
            Created By:
            {' '}
            <br />
            {' '}
            <br />
          </p>
          <div />
        </div>
      </div>

    </main>

  );
}
