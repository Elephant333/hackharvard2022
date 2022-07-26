import React from 'react';
import styles from './styles/Tracks.module.css';

function Tracks() {
  return (
    <main className={styles.main}>
      <h1 className={styles.titleText}>TRACKS</h1>
      <div className={styles.education}>
        <div className={styles.trackContainer}>
          <div className={styles.front}>
            EDUCATION
          </div>
          <div className={styles.back}>
            The description for the education track goes here!
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare ligula
            ultricies sapien rutrum, at porta mi vehicula. Duis aliquet enim odio, ac
            aliquam velit dapibus vitae. Nunc cursus in ipsum aliquam dapibus. Maecenas
            finibus, massa ac commodo venenatis, lectus eros accumsan ipsum, eu pharetra
            ante lacus sit amet nulla. Cras libero mauris, eleifend non commodo sed, egestas
            a erat. Sed maximus, metus et tempus hendrerit, enim nulla dapibus libero, quis
            ultricies mi diam ut erat. Aenean eleifend dictum leo. Quisque malesuada
            elementum purus. Quisque sit amet sem at magna vestibulum laoreet quis ut ipsum.
            Mauris eget tempor velit, ac pellentesque nisi.
          </div>
        </div>
      </div>
      <div className={styles.entertainment}>
        <div className={styles.trackContainer}>
          <div className={styles.front}>
            ENTERTAINMENT
          </div>
          <div className={styles.back}>
            The description for the entertainment track would go here
          </div>
        </div>
      </div>
      <div className={styles.lifehack}>
        <div className={styles.trackContainer}>
          <div className={styles.front}>
            LIFEHACK
          </div>
          <div className={styles.back}>
            The description for the lifehack track. Woho!
          </div>
        </div>
      </div>
    </main>
  );
}

export default Tracks;
