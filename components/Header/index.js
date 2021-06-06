import React from "react";
import { H3, BodyExtraSmall } from "../Typography";
import Link from "next/link";
import styles from "./index.module.scss";

const Header = ({ pink }) => {
  return (
    <div>
      <header className={styles.Header}>
        <div className={styles.HeaderContent}>
          <div className={styles.FreeVansWrapper}>
            <img
              className={styles.FreeVans}
              src="/freeVans.svg"
              alt="Giving away a free pair of Vans"
            />
          </div>
          <div className={styles.LogoWrapper}>
            <Link href="/">
              <img
                className={styles.Logo}
                src="/PromNightLogo.svg"
                alt="Prom Night Skate Logo"
              />
            </Link>
            <div className={styles.DateWrapper}>
              <H3 className={styles.Date}>
                Every Tuesday &bull; June - September
              </H3>
              <H3 className={styles.Time}>
                6:30pm - 8:30pm @ Cochrane Skate Park{" "}
              </H3>
            </div>
          </div>
        </div>
      </header>
      <div className={styles.BottomBanner}>
        <div className={styles.BannerContent}>
          <BodyExtraSmall className={styles.BannerText}>
            No Experience Necessary
          </BodyExtraSmall>

          <BodyExtraSmall className={styles.BannerText}>
            Any Skill Level
          </BodyExtraSmall>
          <BodyExtraSmall className={styles.BannerText}>Any Age</BodyExtraSmall>
          <BodyExtraSmall className={styles.BannerText}>
            Support and Mentorship
          </BodyExtraSmall>
          <BodyExtraSmall className={styles.BannerText}>
            Completely Free
          </BodyExtraSmall>
        </div>
      </div>
    </div>
  );
};

export default Header;
