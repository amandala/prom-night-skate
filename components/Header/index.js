import React from "react";
import { H3, H1, BodyExtraSmall } from "../Typography";
import Link from "next/link";
import moment from "moment";
import styles from "./index.module.scss";

const Header = ({ event }) => {
  return (
    <div>
      <header className={styles.Header}>
        <div className={styles.HeaderContent}>
          <div className={styles.LogoWrapper}>
            <Link href="/">
              <img
                className={styles.Logo}
                src="/PromNightLogo.svg"
                alt="Prom Night Skate Logo"
              />
            </Link>
            <div className={styles.DateWrapper}>
              <div>
                <H3 className={styles.Time}>
                  Next Event:{" "}
                  <span className={styles.Date}>
                    {moment(event.date).format("MMM Do @ h:mm a")}
                  </span>
                </H3>
                <H1 className={styles.EventName}>{event.title}</H1>
                <BodyExtraSmall className={styles.EventDesc}>
                  {event.description}
                </BodyExtraSmall>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
