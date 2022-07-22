import React from 'react';
import styles from './Speakers.module.css';
import speakersLines from './images/speakers-lines.png';
import speakersAngles from './images/speakers-angles.png';
import Navigator from './Navigator';

function Speakers() {
  return (
    <main className={styles.main}>
      <Navigator />
      <head>
        <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
        <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js" />
        <script src="//code.jquery.com/jquery-1.11.1.min.js" />
      </head>
      <h1 className={styles.titleText}>Speakers</h1>
      <img className={styles.speakersLines} src={speakersLines} alt="" />
      <img className={styles.speakersAngles} src={speakersAngles} alt="" />
      {/* <div id="carousel-example" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner row w-100 mx-auto" role="listbox">
          <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3 active">
            <img src="images/1.jpg" class="img-fluid mx-auto d-block" alt="img1" />
          </div>
          <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
            <img src="images/2.jpg" class="img-fluid mx-auto d-block" alt="img2" />
          </div>
          <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
            <img src="images/3.jpg" class="img-fluid mx-auto d-block" alt="img3" />
          </div>
          <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
            <img src="images/4.jpg" class="img-fluid mx-auto d-block" alt="img4" />
          </div>
          <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
            <img src="images/5.jpg" class="img-fluid mx-auto d-block" alt="img5" />
          </div>
          <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
            <img src="images/6.jpg" class="img-fluid mx-auto d-block" alt="img6" />
          </div>
          <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
            <img src="images/7.jpg" class="img-fluid mx-auto d-block" alt="img7" />
          </div>
          <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
            <img src="images/8.jpg" class="img-fluid mx-auto d-block" alt="img8" />
          </div>
      </div>
      <a class="carousel-control-prev" href="#carousel-example" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carousel-example" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div> */}
    </main>
  );
}

export default Speakers;
