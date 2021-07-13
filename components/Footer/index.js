import React from "react";
import cx from "classnames";
import styles from "./index.module.scss";

import { H1, BodyExtraSmall } from '../Typography';

const Footer = () => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Main}>
        {/* <div>
          <H1 className={styles.Header}>Get Involved</H1>
          
        </div>
        <div>
          <H1 className={styles.Header}>Sponsors</H1>
        </div> */}
        <div className={styles.Section}>
          <H1 className={styles.Header}>Reconciliation</H1>
          <BodyExtraSmall className={styles.Text}>Prom Night Skate acknowledges the lands we gather and skate on are the traditional unceeded territories of Treaty 7 Nations including the Blackfoot Confederacy (the Siksika, Pikani, and Kainai First Nations), the Tsuut'ina and Stoney Nakoda First Nations (Chikini, Bearspaw and Wesley Bands) and the Métis Nation of Alberta (Region 3) and all who today call Moh'kins'tsis home.</BodyExtraSmall>
        </div>
      </div>
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
