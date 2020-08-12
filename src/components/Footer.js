import React from 'react';
import styles from './Footer.module.css';

function Footer() {
    return (
      <div className={styles.footer}>
        <ul className={styles.footer__list}>
          <li>link</li>
          <li>link</li>
          <li>link</li>
        </ul>
        <ul className={styles.footer__list}>
          <li>link</li>
          <li>link</li>
          <li>link</li>
        </ul>
        <ul className={styles.footer__list}>
          <li>link</li>
          <li>link</li>
          <li>link</li>
        </ul>
      </div>
    );
}

export default Footer
