import React from 'react';
import styles from './SidebarArticle.module.css';
import news from '../images/news.jpg';

const SidebarArticle = ({
  article: { urlToImage, content, title },
}) => {
  return (
      <div className={styles.sidebarArticle__container}>
        <div className={styles.sidebarArticle__content}>
          <h4>{title}</h4>
          <p>{content}</p>
        </div>
        <div className={styles.sidebarArticle__thumbnail}>
          <img src={urlToImage ? urlToImage : news} alt="thumbnail" />
        </div>
      </div>
  );
};

export default SidebarArticle;