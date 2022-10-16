import React from 'react';
import { useState } from 'react';
import imgg from './assets/images/1.jpg';
import styles from './styles/Gallery.module.css'
import CloseIcon from '@mui/icons-material/Close';

export default function Gallery() {
  const imgList = [
    imgg,
    imgg,
    imgg,
    imgg,
    imgg,
    imgg,
    imgg,
  ];
  return (
    <div className={styles.images}>
    {imgList.map((img, idx) => {
          return (
            <div className={styles.image} key = {idx} >
              <img src={img}/>
            </div>
          );
      })}
    </div>
  );
}
