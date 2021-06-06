import React from "react";
import { H1, Body } from "../../components/Typography";
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
        <div className={styles.StartSomewhere}>
          <H1 className={styles.Heading}>Everyone has to start somewhere</H1>
          <Body className={styles.About}>
            We’re can help get you on your board for the first time, drop in, or
            just learn some fundamentals. We’re here to help girls advance their
            skills safely by setting up a fun and supportive envirornment.
          </Body>
        </div>
        <img
          className={styles.Image}
          src={`/photos/kayls.jpg`}
          key="sk1"
          alt="Organizer Kayleigh"
        />
      </div>
      <div className={styles.Row2}>
        <img
          className={styles.Image}
          src={`/photos/droppinin.jpg`}
          key="sk1"
          alt="Girl dropping into the bowl"
        />
        <div className={styles.InnerGrid}>
          <img
            className={styles.Image}
            src={`/photos/pizzasmile.jpg`}
            key="sk1"
            alt="GOrl eating Pizza"
          />
          <img
            className={styles.Image}
            src={`/photos/contemplatethedrop.jpg`}
            key="sk1"
            alt="Girl looking down into bowl ready to drop"
          />
        </div>
        <div className={styles.PizzaNPop}>
          <img
            className={styles.PizzaNPopIll}
            src={`/pizzanpop.png`}
            alt="Pizza n Pop illustration by Ris"
          />
        </div>
      </div>
      <div className={styles.Row3}>
        <img
          className={styles.Image}
          src={`/photos/promgirls.jpg`}
          key="sk1"
          alt="Group of Prom Girls"
        />
        <div className={styles.InnerGrid}>
          <img
            className={styles.Image}
            src={`/photos/samstheman.jpg`}
            key="sk1"
            alt="Shred's Sam Helping"
          />
          <img
            className={styles.Image}
            src={`/photos/promqueen.jpg`}
            key="sk1"
            alt="Prom Queen Vans winner"
          />
        </div>
        <img
          className={styles.Image}
          src={`/photos/allsmiles.jpg`}
          key="sk1"
          alt="Kayleigh and the crew"
        />
      </div>
    </div>
  );
};

export default Gallery;
