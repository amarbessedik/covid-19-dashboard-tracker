import React, { useState } from "react";
// import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import styles from './ScrollTop.module.css'

const ScrollTop = () => {
 
  const [showScroll, setShowScroll] = useState(false);
  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };
  window.addEventListener("scroll", checkScrollTop);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <ExpandLessIcon
      className={styles.scrollUp}
      onClick={scrollTop}
      style={{ height: 40, display: showScroll ? "flex" : "none" }}
    />
  );
};

export default ScrollTop;
