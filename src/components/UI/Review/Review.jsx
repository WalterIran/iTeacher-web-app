import React from 'react';
import styles from './Review.module.css';

const Review = ({reviewTitle, reviewDescription, rating}) => {
  return (
    <div className={styles.container}>
        <div className={styles.title}>
            <h4>{reviewTitle}</h4>
            <p>{rating}</p>
        </div>
        <div className="">
            <p>{reviewDescription}</p>
        </div>
        <div className={styles.user}>
            <span>by: anonymous-{Math.floor(Math.random() * (999 - 100) + 100)}</span>
        </div>
    </div>
  )
}

export default Review;