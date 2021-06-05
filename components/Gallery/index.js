import React from "react";
import styles from "./index.module.scss";

const images = [
  "skate1.png",
  "skate2.png",
  "skate3.png",
  "skate4.png",
  "skate5.png",
  "skate6.png",
  "skate7.png",
];

const Gallery = () => {
  return (
    <div className={styles.Gallery}>
      <div className={styles.Row1}>
        <img
          className={styles.Image}
          src={`/photos/skate5.png`}
          key="sk1"
          alt="GIrls"
        />
        <img
          className={styles.Image}
          src={`/photos/skate8.png`}
          key="sk1"
          alt="GIrls"
        />
        <img
          className={styles.Image}
          src={`/photos/skate9.png`}
          key="sk1"
          alt="GIrls"
        />
      </div>
      <div className={styles.Row2}>
        <img
          className={styles.Image}
          src={`/photos/skate6.png`}
          key="sk1"
          alt="GIrls"
        />
        <img
          className={styles.Image}
          src={`/photos/skate7.png`}
          key="sk1"
          alt="GIrls"
        />
        <img
          className={styles.Image}
          src={`/photos/skate3.png`}
          key="sk1"
          alt="GIrls"
        />
      </div>
    </div>
  );
};

export default Gallery;
