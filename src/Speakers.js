import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from './styles/Speakers.module.css';
import speakersLines from './assets/images/speakers-lines.png';
import speakersAngles from './assets/images/speakers-angles.png';
import harsen from './assets/images/harsen.png';
import kelly from './assets/images/kelly.jpg';
import vineet from './assets/images/vineet.png';
import hiba from './assets/images/hiba.jpg';

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
          {/* eslint-disable max-len */}
          <div>
            <div className={styles.speakerContainer}>
              <img src={harsen} alt="Harsen Sidhu" className={styles.speakerImage} />
              <div className={styles.speakerOverlay}>
                <div className={styles.speakerText}>
                  Harsen Sidhu
                  <br />
                  <br />
                  A 2015 graduate from Princeton with a Bachelors in Political Science, Harsen is currently a Product Manager at Clubhouse and has more than 7 years of experience working in technology across Uber, Instagram, and Airbnb. At Clubhouse, an audio first social network focussed on conversations rather than content, he is now working with the founders to define and execute on the future of the company.
                </div>
              </div>
            </div>
            <p className={styles.speakerName}>Harsen Sidhu</p>
          </div>
          <div>
            <div className={styles.speakerContainer}>
              <img src={kelly} alt="Dr. Kelly Heuer" className={styles.speakerImage} />
              <div className={styles.speakerOverlay}>
                <div className={styles.speakerText}>
                  Dr. Kelly Heuer
                  <br />
                  <br />
                  Dr. Kelly Heuer has worked in higher education for over fifteen years, first as a researcher and professor and now as Vice President of Learning Experience at edX/2U. She holds an AB in philosophy from Harvard and an MA and PhD in philosophy from Georgetown. The first in her family to attend college, Kelly mentors other first-generation students at Harvard and Georgetown and supports colleagues in academia looking for alternative careers in education.
                </div>
              </div>
            </div>
            <p className={styles.speakerName}>Dr. Kelly Heuer</p>
          </div>
          <div>
            <div className={styles.speakerContainer}>
              <img src={hiba} alt="Hiba Sharief" className={styles.speakerImage} />
              <div className={styles.speakerOverlay}>
                <div className={styles.speakerText}>
                  Hiba Sharief
                  <br />
                  <br />
                  A global thought leader and technology executive with 20+ years of experience across 40+ countries, Hiba is currently a Global Principal Technologist at Amazon Web Services. Hiba was named a Silicon Valley “40 under 40″ while leading IT and Security at Oportun, a Bay Area-based fintech she helped take through its successful IPO. Hiba is an active investor with a passion for supporting startups, empowering the youth and changing the ratio of women in technology and leadership.
                </div>
              </div>
            </div>
            <p className={styles.speakerName}>Hiba Sharief</p>
          </div>
          <div>
            <div className={styles.speakerContainer}>
              <img src={vineet} alt="Vineet Raghu" className={styles.speakerImage} />
              <div className={styles.speakerOverlay}>
                <div className={styles.speakerText}>
                  Vineet Raghu
                  <br />
                  <br />
                  Vineet is research faculty in Radiology at Massachusetts General Hospital and Harvard Medical School. His lab’s goal is to improve disease prevention by developing machine learning models to inform patients of their future risk of developing major chronic diseases like cardiovascular diseases and cancers. He completed his PhD in Computer Science from the University of Pittsburgh in 2019 and aims to mentor computer scientists to more effectively collaborate with non-technical domain experts.
                </div>
              </div>
            </div>
            <p className={styles.speakerName}>Vineet Raghu</p>
          </div>
          {/* eslint-enable max-len */}
        </Carousel>
      </div>
    </main>
  );
}

export default Speakers;
