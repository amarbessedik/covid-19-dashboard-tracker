import React from "react";
import styles from "./Navbar.module.css";
// import logo from '../images/Covid19_logo.png';

function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>
        <h3>COVID19 GLOBAL TRACKER</h3>
      </div>
      <ul className={styles.links}>
        <li>
          <a href="/">link</a>
        </li>
        <li>
          <a href="/">link</a>
        </li>
        <li>
          <a href="/">link</a>
        </li>
      </ul>
      <div className={styles.search__bar}>
        <input
          type="text"
          name="searchbar"
          className={styles.search__input}
          placeholder="Search latest news on coronavirus"
        />
        <button type="button">Search</button>
      </div>
    </header>
  );
}

export default Navbar;
