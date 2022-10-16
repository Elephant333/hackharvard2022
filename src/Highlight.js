import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './styles/Highlight.module.css';
import promptu from './assets/images/promptu.jpg';
import DexteriKey from './assets/images/DexteriKey.JPG';
import summa from './assets/images/summa.JPG';
import RecipeFinder from './assets/images/recipe.JPG';
import Pompi from './assets/images/pompi.JPG';
import ULabel from './assets/images/ulabel.JPG';

export default function Highlight() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div style={{ fontWeight: 'bold', fontSize: 40, textAlign: 'center' }}>PROJECT HIGHLIGHTS</div>
        <div>
          <Row>
            <Col xs={12} md={6} style={{ marginTop: 20 }}>
              <img className={styles.image} src={promptu} alt="Project" />
            </Col>
            <Col xs={12} md={6} style={{ marginTop: 20 }}>
              <div style={{ textAlign: 'center' }} className="col">
                <p style={{ fontWeight: 'bold', fontSize: 20 }}>Promptu</p>
                <p style={{ fontSize: 16 }}>
                  Promptu is a social media platform based entirely on spontaneous voice messages that answer daily engaging and fun prompts. We created Promptu to eliminate the pressure of traditional social media and enable more natural online presence. We seek to create a place for users to have fun, genuine, and impromptu interactions that imitate in-person banter.
                </p>
              </div>
            </Col>
          </Row>
        </div>

        <hr style={{ color: 'white' }} />

        <div style={{ marginTop: 20, padding: 20 }}>
          <Row>
            <Col xs={12} md={6} style={{ marginTop: 20 }}>
              <div style={{ textAlign: 'center' }} className="col">
                <p style={{ fontWeight: 'bold', fontSize: 20 }}>DexteriKey</p>
                <p style={{ fontSize: 16 }}>
                  DexteriKey allows someone to type without using a physical keyboard, similarly to touch typing, as long as they have access to a mobile device. The product requires a user to wear a pair of gloves with buttons or sensors attached to each finger. The user types on a flat surface while wearing the gloves, and wires connected to the gloves communicate the keystrokes to a computer, which processes the keystrokes to determine what letters they represent before printing them out to either a text processing file or the computer terminal. Words are separated using spaces.
                </p>
              </div>
            </Col>
            <Col xs={12} md={6} style={{ marginTop: 20 }}>
              <img className={styles.image} src={DexteriKey} alt="Project" />
            </Col>
          </Row>
        </div>
        <hr style={{ color: 'white' }} />

        <div>
          <Row>
            <Col xs={12} md={6} style={{ marginTop: 20 }}>
              <img className={styles.image} src={Pompi} alt="Project" />
            </Col>
            <Col xs={12} md={6} style={{ marginTop: 20 }}>
              <div style={{ textAlign: 'center' }} className="col">
                <p style={{ fontWeight: 'bold', fontSize: 20 }}>Pompi</p>
                <p style={{ fontSize: 16 }}>
                  Users are welcomed by our virtual avatar, Pompy! Pompy is meant to be a virtual friend for users during quarantine. Users can view Pompy in 3D to see it with them in real-time and interact with Pompy. Users can also view a live recent data map that shows the relevance of COVID-19 even at this time. Users can also take a photo of their food to see the number of calories they eat to stay healthy during quarantine. Users can also escape their reality by entering a different landscape in 3D. Lastly, users can view a roadmap of next steps in their journey to get through their quarantine, and to speak to Pompy.
                </p>
              </div>
            </Col>
          </Row>
        </div>

        <hr style={{ color: 'white' }} />

        <div style={{ marginTop: 20, padding: 20 }}>
          <Row>
            <Col xs={12} md={6} style={{ marginTop: 20 }}>
              <div style={{ textAlign: 'center' }} className="col">
                <p style={{ fontWeight: 'bold', fontSize: 20 }}>ULabel</p>
                <p style={{ fontSize: 16 }}>
                  Like Shazam, ULabel listens to a song but instead of only telling you all that Shazam, it will tell you the chances of success your music has! Using machine learning techniques including neural networks, k-nearest neighbor, Spotify API and more. Aimed towards an audience of music lovers, producers, upcoming artists. ULabel can be used to determine the potential popularity of unreleased music.
                </p>
              </div>
            </Col>
            <Col xs={12} md={6} style={{ marginTop: 20 }}>
              <img className={styles.image} src={ULabel} alt="Project" />
            </Col>
          </Row>
        </div>
        <hr style={{ color: 'white' }} />

        <div>
          <Row>
            <Col xs={12} md={6} style={{ marginTop: 20 }}>
              <img className={styles.image} src={summa} alt="Project" />
            </Col>
            <Col xs={12} md={6} style={{ marginTop: 20 }}>
              <div style={{ textAlign: 'center' }} className="col">
                <p style={{ fontWeight: 'bold', fontSize: 20 }}>Summa</p>
                <p style={{ fontSize: 16 }}>
                  Summa takes inputs of audio or video files from lecture captures or tutoring sessions, and takes inputs of pdf files or direct text entry for either textbooks or lecture notes which it summarizes to produce a bitesize exam review guide.
                </p>
              </div>
            </Col>
          </Row>
        </div>

        <hr style={{ color: 'white' }} />

        <div style={{ marginTop: 20, padding: 20 }}>
          <Row>
            <Col xs={12} md={6} style={{ marginTop: 20 }}>
              <div style={{ textAlign: 'center' }} className="col">
                <p style={{ fontWeight: 'bold', fontSize: 20 }}>Recipe Finder</p>
                <p style={{ fontSize: 16 }}>
                  Recipe Finder is an all-in-one application that can be accessed on any platform. it has a plethora of recipes stored in its database. users can set dietary restrictions and certain preferences and our mind-blowing algorithm will provide stack based list like tinder of recipes to the user the user can then like and dislike the recipe updating their preferences. The users can also rate every recipe giving higher-rated recipes higher preference. it is your one-stop shop for all your cravings from appetizers to deserts.
                </p>
              </div>
            </Col>
            <Col xs={12} md={6} style={{ marginTop: 20 }}>
              <img className={styles.image} src={RecipeFinder} alt="Project" />
            </Col>
          </Row>
        </div>
        <hr style={{ color: 'white' }} />
      </div>
    </main>
  );
}
