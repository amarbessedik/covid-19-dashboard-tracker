import React, {useState} from "react";
import styles from "./Navbar.module.css";
import logo from '../images/logo.png';
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

function Navbar() {
  const [open, setOpen] = useState(false); 
  const handleClick = (e) => {
    e.preventDefault();
    let side__menu = document.getElementById("side__menu");

    open
      ? (side__menu.style.transform = "translateX(100%)")
      : (side__menu.style.transform = "translateX(0)");
    setOpen(!open);  
  };
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
          <a href="#map">Map</a>
        </li>
        <li>
          <a href="#table">Cases By Country</a>
        </li>
        <li>
          <a href="#graph">Worldwide Line Graph</a>
        </li>
        <li>
          <a href="#news">Coronavirus News</a>
        </li>
      </ul>
      <div onClick={handleClick} className={styles.hamburger}>
        {open ? (
          <CloseIcon className={styles.bar} />
        ) : (
          <MenuIcon className={styles.bar} />
        )}
      </div>
      <div id="side__menu" className={styles.side__menu}>
        <ul className={styles.side__menu__links}>
          <li>
            <a href="#map">Map</a>
          </li>
          <li>
            <a href="#table">Cases</a>
          </li>
          <li>
            <a href="#graph">Graph</a>
          </li>
          <li>
            <a href="#news">News</a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
