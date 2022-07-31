import React from 'react';
import styles from './styles/Tracks.module.css';

function Tracks() {
  return (
    <main className={styles.main}>
      {/* eslint-disable max-len */}
      <h1 className={styles.titleText}>TRACKS</h1>
      <div className={styles.education}>
        <div className={styles.trackContainer}>
          <div className={styles.front}>
            EDUCATION
          </div>
          <div className={styles.back}>
            With the rise of online learning resources like Quizlet, KhanAcademy, Duolingo, and EdX, digital learning has become increasingly important to the contemporary student. Projects in this track may provide fresh perspectives on and increased accessibility of digital education and online learning platforms. Additionally, they may find new ways of teaching, motivating, and retaining students.
          </div>
        </div>
      </div>
      <div className={styles.entertainment}>
        <div className={styles.trackContainer}>
          <div className={styles.front}>
            ENTERTAINMENT
          </div>
          <div className={styles.back}>
            The role of technology in entertainment has grown explosively. From CGI in movies to mobile apps with hours of storytelling to fun online party games, there is no limit to what technology can do for entertainment. Projects in this track will present new “hacks” of entertainment such as games, arts, and apps. Hackers may invent something entirely new or create an altered/advanced version of an existing form of entertainment.
          </div>
        </div>
      </div>
      <div className={styles.lifehack}>
        <div className={styles.trackContainer}>
          <div className={styles.front}>
            LIFEHACK
          </div>
          <div className={styles.back}>
            Let’s be casual for a second. We know it and you know it: Life’s hard. Yet, since the dawn of humanity, people have strived to become the best versions of themselves despite this relentless struggle. Some find it through better health, while others find it in heightened productivity. From fitness trackers to sleep trackers to daily schedulers, we want to see how you can improve life through your project. Projects in this track are far-reaching in type and seek to “hack” the daily lifestyles of people, individually or group wide.
          </div>
        </div>
      </div>
      {/* eslint-enable max-len */}
    </main>
  );
}

export default Tracks;
