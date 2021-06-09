import React from "react";
import { H3, H1, BodyExtraSmall, BodySmall } from "../Typography";
import Link from "next/link";
import moment from "moment";
import styles from "./index.module.scss";

const Header = ({ event }) => {
  console.log("EVENT", event);
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
                <BodySmall className={styles.EventDesc}>
                  {event.description}
                </BodySmall>
              </div>
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
