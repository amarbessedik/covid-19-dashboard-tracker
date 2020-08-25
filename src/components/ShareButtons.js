import React from "react";
import styles from "./ShareButtons.module.css";

const ShareButtons = () => {
  return (
    // <!-- I got these buttons from simplesharebuttons.com -->
    <div className={styles.share__buttons}>
      {/* <!-- Twitter --> */}
      <a
        href="https://twitter.com/share?url=https://simplesharebuttons.com&amp;text=Simple%20Share%20Buttons&amp;hashtags=simplesharebuttons"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://simplesharebuttons.com/images/somacro/twitter.png"
          alt="Twitter"
        />
      </a>

      {/* <!-- Facebook --> */}
      <a
        href="http://www.facebook.com/sharer.php?u=https://simplesharebuttons.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://simplesharebuttons.com/images/somacro/facebook.png"
          alt="Facebook"
        />
      </a>

      {/* <!-- LinkedIn --> */}
      <a
        href="http://www.linkedin.com/shareArticle?mini=true&amp;url=https://simplesharebuttons.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://simplesharebuttons.com/images/somacro/linkedin.png"
          alt="LinkedIn"
        />
      </a>

      {/* <!-- Reddit --> */}
      <a
        href="http://reddit.com/submit?url=https://simplesharebuttons.com&amp;title=Simple Share Buttons"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://simplesharebuttons.com/images/somacro/reddit.png"
          alt="Reddit"
        />
      </a>
    </div>
  );
};

export default ShareButtons;
