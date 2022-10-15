import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './styles/Highlight.module.css';
import project from './assets/images/bookProject.png';

export default function Highlight() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div style={{ fontWeight: 'bold', fontSize: 40, textAlign: 'center' }}>PROJECT HIGHLIGHTS</div>
        <div>
          <Row>
            <Col xs={12} md={6} style={{ marginTop: 20 }}>
              <img className={styles.image} src={project} alt="Project" />
            </Col>
            <Col xs={12} md={6} style={{ marginTop: 20 }}>
              <div style={{ textAlign: 'center' }} className="col">
                <p style={{ fontWeight: 'bold', fontSize: 20 }}>PROJECT NAME</p>
                <p style={{ fontSize: 16 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  vitae nisl auctor, aliquam nisl sit amet, aliquam nisl. Donec
                  vitae nisl auctor, aliquam nisl sit amet, aliquam nisl. Donec
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
                <p style={{ fontWeight: 'bold', fontSize: 20 }}>PROJECT NAME</p>
                <p style={{ fontSize: 16 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  vitae nisl auctor, aliquam nisl sit amet, aliquam nisl. Donec
                  vitae nisl auctor, aliquam nisl sit amet, aliquam nisl. Donec
                </p>
              </div>
            </Col>
            <Col xs={12} md={6} style={{ marginTop: 20 }}>
              <img className={styles.image} src={project} alt="Project" />
            </Col>
          </Row>
        </div>
        <hr style={{ color: 'white' }} />

        <div>
          <Row>
            <Col xs={12} md={6} style={{ marginTop: 20 }}>
              <img className={styles.image} src={project} alt="Project" />
            </Col>
            <Col xs={12} md={6} style={{ marginTop: 20 }}>
              <div style={{ textAlign: 'center' }} className="col">
                <p style={{ fontWeight: 'bold', fontSize: 20 }}>PROJECT NAME</p>
                <p style={{ fontSize: 16 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  vitae nisl auctor, aliquam nisl sit amet, aliquam nisl. Donec
                  vitae nisl auctor, aliquam nisl sit amet, aliquam nisl. Donec
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
                <p style={{ fontWeight: 'bold', fontSize: 20 }}>PROJECT NAME</p>
                <p style={{ fontSize: 16 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  vitae nisl auctor, aliquam nisl sit amet, aliquam nisl. Donec
                  vitae nisl auctor, aliquam nisl sit amet, aliquam nisl. Donec
                </p>
              </div>
            </Col>
            <Col xs={12} md={6} style={{ marginTop: 20 }}>
              <img className={styles.image} src={project} alt="Project" />
            </Col>
          </Row>
        </div>
        <hr style={{ color: 'white' }} />
      </div>
    </main>
  );
}
