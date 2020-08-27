import React from 'react';
import ShareButtons from "./ShareButtons";
import styles from './Footer.module.css';

function Footer() {
    return (
      <div className={styles.footer}>
        <ul className={styles.footer__list}>
          <li>
            <h3 style={{padding:0, marginBottom: '5px'}}>&copy; COVID-19 GLOBL TRACKER.</h3>
          </li>
          <li style={{ textTransform: "uppercase" }}>
            Amar Bessedik, August 2020{" "}
            {!new Date().getFullYear() === 2020
              ? " - " + new Date().getFullYear()
              : null}
          </li>
          <li>amar.bessedik@gmail.com</li>
        </ul>
        <ul className={styles.footer__list}>
          <li>
            {" "}
            <ShareButtons />{" "}
          </li>
        </ul>
      </div>
    );
}

export default Footer
