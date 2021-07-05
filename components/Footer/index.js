import React from "react";
import cx from "classnames";
import styles from "./index.module.scss";

const Footer = () => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Links}>
        <a
          className={cx(styles.Link, styles.Cta)}
          href="https://linktr.ee/mixedmanifest"
          target="_blank"
          rel="noreferrer"
        >
          Site made with ♡ by Mixed Manifest
        </a>
      </div>
    </div>
  );
};

export default Footer;
