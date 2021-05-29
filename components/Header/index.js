import React from "react";
import cx from "classnames";
import { H3 } from "../Typography";
import Link from "next/link";
import styles from "./index.module.scss";

const Header = ({ pink }) => {
  return (
    <header className={cx(styles.Header, { [styles.HeaderBlack]: !pink })}>
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
  );
};

export default Header;
