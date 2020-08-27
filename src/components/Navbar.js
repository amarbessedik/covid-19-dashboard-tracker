import React, {useState} from "react";
import styles from "./Navbar.module.css";
import logo from '../images/logo.png';
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import MapIcon from "@material-ui/icons/Map";
import TimelineIcon from "@material-ui/icons/Timeline";
import PublicIcon from "@material-ui/icons/Public";
import InfoIcon from "@material-ui/icons/Info";

function Navbar() {
  const [open, setOpen] = useState(false); 

  const openMenu = () =>{
    let side__menu = document.getElementById("side__menu");
    side__menu.style.transform = "translateX(0)";
    setOpen(true);
  }
  const closeMenu = () => {
    let side__menu = document.getElementById("side__menu");
    side__menu.style.transform = "translateX(100%)";
    setOpen(false);
  }

  const handleClick = (e) => {
    e.preventDefault();
    open? closeMenu():openMenu();
  };

  const cleanUrl = () =>{
    window.history.pushState("object or string", "Page Title", "/");    
  }
  return (
    <header id='top' className={styles.navbar}>
      <div className={styles.logo}>
        <a href="/">
          <img src={logo} alt="logo" />
          <div className={styles.logo__text}>
            <span>COVID-19</span>
            <span>GLOBAL</span>
            <span>TRACKER</span>
          </div>
        </a>
      </div>
      <ul className={styles.links}>
        <li >
          <MapIcon className={styles.link__icon} />
          <a onMouseLeave={cleanUrl} href="#map">Map</a>
        </li>
        <li>
          <PublicIcon className={styles.link__icon} />
          <a onMouseLeave={cleanUrl} href="#table">Cases</a>
        </li>
        <li>
          <TimelineIcon className={styles.link__icon} />
          <a onMouseLeave={cleanUrl} href="#graph">Graph</a>
        </li>
        <li>
          <InfoIcon className={styles.link__icon} />
          <a onMouseLeave={cleanUrl} href="#about">About</a>
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
          <li onClick={closeMenu}>
            <MapIcon className={styles.link__icon} />
            <a onMouseLeave={cleanUrl} href="#map">Map</a>
          </li>
          <li onClick={closeMenu}>
            <PublicIcon className={styles.link__icon} />
            <a onMouseLeave={cleanUrl} href="#table">Cases</a>
          </li>
          <li onClick={closeMenu}>
            <TimelineIcon className={styles.link__icon} />
            <a onMouseLeave={cleanUrl} href="#graph">Graph</a>
          </li>
          <li onClick={closeMenu}>
            <InfoIcon className={styles.link__icon} />
            <a onMouseLeave={cleanUrl} href="#about">About</a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
