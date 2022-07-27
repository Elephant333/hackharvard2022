import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from './styles/Speakers.module.css';
import speakersLines from './assets/images/speakers-lines.png';
import speakersAngles from './assets/images/speakers-angles.png';
import img1 from './assets/images/1.jpg';
import img2 from './assets/images/2.jpg';
import img3 from './assets/images/3.jpg';
import img4 from './assets/images/4.jpg';
import img5 from './assets/images/5.jpg';
import img6 from './assets/images/6.jpg';
import img7 from './assets/images/7.jpg';
import img8 from './assets/images/8.jpg';

function Speakers() {
  return (
    <main className={styles.main}>
      <h1 className={styles.titleText}>SPEAKERS</h1>
      <img className={styles.speakersLines} src={speakersLines} alt="" />
      <img className={styles.speakersAngles} src={speakersAngles} alt="" />
      <div className={styles.speakerCarousel}>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlay
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container-with-dots"
          dotListClass=""
          draggable={false}
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 3,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 800,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 801,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          <div className={styles.speakerCard}>
            <img
              src={img1}
              alt="First slide"
              className={styles.speakerImage}
            />
            <p className={styles.speakerName}>SPEAKER 1</p>
          </div>
          <div>
            <img
              src={img2}
              alt="Second slide"
              className={styles.speakerImage}
            />
            <p className={styles.speakerName}>SPEAKER 2</p>
          </div>
          <div>
            <img
              src={img3}
              alt="Third slide"
              className={styles.speakerImage}
            />
            <p className={styles.speakerName}>SPEAKER 3</p>
          </div>
          <div>
            <img
              src={img4}
              alt="Fourth slide"
              className={styles.speakerImage}
            />
            <p className={styles.speakerName}>SPEAKER 4</p>
          </div>
          <div className={styles.speakerCard}>
            <img
              src={img5}
              alt="Fifth slide"
              className={styles.speakerImage}
            />
            <p className={styles.speakerName}>SPEAKER 5</p>
          </div>
          <div>
            <img
              src={img6}
              alt="Sixth slide"
              className={styles.speakerImage}
            />
            <p className={styles.speakerName}>SPEAKER 6</p>
          </div>
          <div>
            <img
              src={img7}
              alt="Seventh slide"
              className={styles.speakerImage}
            />
            <p className={styles.speakerName}>SPEAKER 7</p>
          </div>
          <div>
            <img
              src={img8}
              alt="Eigth slide"
              className={styles.speakerImage}
            />
            <p className={styles.speakerName}>SPEAKER 8</p>
          </div>
        </Carousel>
      </div>
    </main>
  );
}

export default Speakers;
