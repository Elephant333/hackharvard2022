import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
import styles from './styles/Speakers.module.css';
import speakersLines from './assets/images/speakers-lines.png';
import speakersAngles from './assets/images/speakers-angles.png';
import img1 from './assets/images/1.jpg';
import img2 from './assets/images/2.jpg';
import img3 from './assets/images/3.jpg';
// import img4 from './assets/images/4.jpg';
// import img5 from './assets/images/5.jpg';
// import img6 from './assets/images/6.jpg';
// import img7 from './assets/images/7.jpg';
// import img8 from './assets/images/8.jpg';

// const responsive = {
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 3,
//     slidesToSlide: 3, // optional, default to 1.
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 2,
//     slidesToSlide: 2, // optional, default to 1.
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//     slidesToSlide: 1, // optional, default to 1.
//   },
// };

function Speakers() {
  return (
    <main className={styles.main}>
      <h1 className={styles.titleText}>SPEAKERS</h1>
      <img className={styles.speakersLines} src={speakersLines} alt="" />
      <img className={styles.speakersAngles} src={speakersAngles} alt="" />
      <div className={styles.speakerCarousel}>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img2}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img3}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      {/* <Carousel
        swipeable={false}
        draggable={false}
        showDots
        responsive={responsive}
        ssr // means to render carousel on server-side.
        infinite
        autoPlay={this.props.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <div><img src={img1} alt="img1" /></div>
        <div><img src={img2} alt="img2" /></div>
        <div><img src={img3} alt="img3" /></div>
        <div><img src={img4} alt="img4" /></div>
      </Carousel> */}
    </main>
  );
}

export default Speakers;
