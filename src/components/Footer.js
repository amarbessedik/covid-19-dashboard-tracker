import React from 'react';
import ShareButtons from "./ShareButtons";
import styles from './Footer.module.css';

const center ={
  textAlign: 'center'
}

function Footer() { 
    return (
      <div className={styles.footer}>
        <ul className={styles.footer__list}>
          <li style={center}>
            <h4 style={{ padding: 0, marginBottom: "5px" }}>
              &copy; COVID-19 WORLDWIDE TRACKER 2020{" "}
              {!new Date().getFullYear() === 2020
                ? " - " + new Date().getFullYear()
                : null}
            </h4>
          </li>
          <li style={center}>
            <span style={{textTransform: 'uppercase', fontSize: '.8rem'}}>Designed &amp; Developed by Amar Bessedik</span>
          </li>
          <li>
            <span style={center}>amar.bessedik@gmail.com </span>
          </li>
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
