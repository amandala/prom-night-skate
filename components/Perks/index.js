import React from "react";
import { BodyExtraSmall } from "../Typography";
import styles from "./index.module.scss";

const Perks = () => {
  return (
    <div className={styles.BottomBanner}>
      <div className={styles.BannerContent}>
        <BodyExtraSmall className={styles.BannerText}>Any Age</BodyExtraSmall>
        <BodyExtraSmall className={styles.BannerText}>
          Any Skill Level
        </BodyExtraSmall>
        <BodyExtraSmall className={styles.BannerText}>
          No Experience Necessary
        </BodyExtraSmall>
        <BodyExtraSmall className={styles.BannerText}>
          Support and Mentorship
        </BodyExtraSmall>
        <BodyExtraSmall className={styles.BannerText}>
          Completely Free
        </BodyExtraSmall>
      </div>
    </div>
  );
};

export default Perks;
