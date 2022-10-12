import React from 'react';
import styles from './styles/Highlight.module.css';
import project from './src/assests/images/bookProject.png';

export default function Highlight() {
  return (
    <div className="container">
      <img
        src={project}
        alt="Project"
        style={{ marginTop: '12%', display: 'inline-block;' }}
      />
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
    </div>

  );
}
