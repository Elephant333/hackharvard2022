import React from 'react';
import styles from './Speakers.module.css';
import speakersLines from './images/speakers-lines.png';
import speakersAngles from './images/speakers-angles.png';
import img1 from './images/1.jpg';
import img2 from './images/2.jpg';
import img3 from './images/3.jpg';
import img4 from './images/4.jpg';
import img5 from './images/5.jpg';
import img6 from './images/6.jpg';
import img7 from './images/7.jpg';
import img8 from './images/8.jpg';

function Speakers() {
  return (
    <main className={styles.main}>
      <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossOrigin="anonymous" />
        <script src="assets/js/jquery-3.3.1.min.js" />
        <script src="assets/js/jquery-migrate-3.0.0.min.js" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" crossOrigin="anonymous" />
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossOrigin="anonymous" />
        <script src="./Speakers.module.js" />
      </head>
      <h1 className={styles.titleText}>SPEAKERS</h1>
      <img className={styles.speakersLines} src={speakersLines} alt="" />
      <img className={styles.speakersAngles} src={speakersAngles} alt="" />
      <div id="carousel-example" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner row w-100 mx-auto" role="listbox">
          <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-3 active">
            <img src={img1} className="img-fluid mx-auto d-block" alt="img1" />
          </div>
          <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
            <img src={img2} className="img-fluid mx-auto d-block" alt="img2" />
          </div>
          <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
            <img src={img3} className="img-fluid mx-auto d-block" alt="img3" />
          </div>
          <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
            <img src={img4} className="img-fluid mx-auto d-block" alt="img4" />
          </div>
          <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
            <img src={img5} className="img-fluid mx-auto d-block" alt="img5" />
          </div>
          <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
            <img src={img6} className="img-fluid mx-auto d-block" alt="img6" />
          </div>
          <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
            <img src={img7} className="img-fluid mx-auto d-block" alt="img7" />
          </div>
          <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
            <img src={img8} className="img-fluid mx-auto d-block" alt="img8" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carousel-example" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carousel-example" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    </main>
  );
}

export default Speakers;
