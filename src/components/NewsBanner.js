import React from "react";
import styles from './NewsBanner.module.css';

function NewsBanner() {
  return (
    <div id='news' className={styles.news__banner}>
      <h5>LATEST NEWS ARTICLES ON CORONAVIRUS</h5>
    </div>
  );
}

export default NewsBanner;
