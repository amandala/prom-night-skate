import React from "react";
import cx from "classnames";
import MailchimpSignup from "./MailchimpSignup";
import { H3, BodySmall } from "../../components/Typography";
import styles from "./index.module.scss";

const Footer = () => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Signup}>
        {/* <H3>Get the Prom Night Newsletter</H3>
        <BodySmall className={styles.Cta}>
          Sign up to stay in the loop on our rad events 🤘
        </BodySmall> */}
        <MailchimpSignup />
      </div>
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
