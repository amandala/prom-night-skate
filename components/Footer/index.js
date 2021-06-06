import React from "react";
import cx from "classnames";
import styles from "./index.module.scss";

const Footer = () => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Links}>
        <a
          className={cx(styles.Link, styles.Cta)}
          href="http://www.portad.ca"
          target="_blank"
        >
          Site made with ♡ by Amanda
        </a>
      </div>
    </div>
  );
};

export default Footer;
