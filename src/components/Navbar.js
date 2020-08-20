import React from "react";
import styles from "./Navbar.module.css";
import logo from '../images/logo.png';

function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
        <div className={styles.logo__text}>
          <span>COVID-19</span>
          <span>GLOBAL</span>
          <span>TRACKER</span>
        </div>
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
