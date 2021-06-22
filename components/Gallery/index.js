import React from "react";
import { H1, Body } from "../../components/Typography";
import styles from "./index.module.scss";

const Gallery = () => {
  return (
    <div className={styles.Gallery}>
      <div className={styles.Row1}>
        <div className={styles.StartSomewhere}>
          <H1 className={styles.Heading}>Every girl has to start somewhere</H1>
          <Body className={styles.About}>
            We are here to empower girls of all ages, through board sports and
            community. We want to help girls advance their skills authentically
            and safely by setting up a fun and encouraging environment.
          </Body>
        </div>
        <div className={styles.ImageWrapper}>
          <img
            className={styles.Image}
            src={`/photos/kayls.jpg`}
            key="sk1"
            alt="Organizer Kayleigh"
          />
        </div>
        <img
          className={styles.Image}
          src={`/photos/coolkids.jpg`}
          key="sk1"
          alt="Organizer Kayleigh"
        />
        
      </div>
      <div className={styles.Row2}>
        <img
          className={styles.Image}
          src={`/photos/kickflip.jpg`}
          key="sk1"
          alt="Girl dropping into the bowl"
        />
        <div className={styles.InnerGrid}>
          <img
            className={styles.Image}
            src={`/photos/contemplate.jpg`}
            key="sk1"
            alt="GOrl eating Pizza"
          />
          <img
            className={styles.Image}
            src={`/photos/trio.jpg`}
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
          src={`/photos/group.jpg`}
          key="sk1"
          alt="Group of Prom Girls"
        />
        <div className={styles.InnerGrid}>
          <img
            className={styles.Image}
            src={`/photos/droppingin.jpg`}
            key="sk1"
            alt="Shred's Sam Helping"
          />
          <img
            className={styles.Image}
            src={`/photos/hugs.jpg`}
            key="sk1"
            alt="Prom Queen Vans winner"
          />
        </div>
        <img
          className={styles.Image}
          src={`/photos/arttime.jpg`}
          key="sk1"
          alt="Kayleigh and the crew"
        />
      </div>
    </div>
  );
};

export default Gallery;
