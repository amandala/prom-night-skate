import React from "react";
import cx from "classnames";
import styles from "./index.module.scss";
import { Body, BodySmall, H1 } from "../../components/Typography";

const FAQ = () => {
  const [openQ, setOpenQ] = React.useState(undefined);

  return (
    <ul className={styles.Wrapper}>
      <H1 className={styles.Title}>Common Questions</H1>
      <li className={styles.Question}>
        <button
          className={cx(styles.Heading, {
            [styles.HeadingOpen]: openQ === "free",
          })}
          onClick={() => setOpenQ("free")}
        >
          <Body className={styles.QuestionText}>Is this seriously free?</Body>
        </button>
        <div
          className={cx(styles.Answer, {
            [styles.AnswerOpen]: openQ === "free",
          })}
        >
          <BodySmall>
            Yup! We want every single shred betty who wants to participate to be
            able to, so we're keeping our skate night events completely free.
            Skate camps and other events will have a small fee to cover
            operational costs.
          </BodySmall>
        </div>
      </li>
      <li className={styles.Question}>
        <button
          className={cx(styles.Heading, {
            [styles.HeadingOpen]: openQ === "safe",
          })}
          onClick={() => setOpenQ("safe")}
        >
          <Body className={styles.QuestionText}>What do you do for safety?</Body>
        </button>
        <div
          className={cx(styles.Answer, {
            [styles.AnswerOpen]: openQ === "safe",
          })}
        >
          <BodySmall>
            We care about safety, big time! We require all girls on the park to
            wear a helmet and encourage the use of knee/elbow pads and wrist
            guards. We've got mentors on site to watch for dangerous tricks and
            teach fundemental skills so the girls feel confident and exercise
            caution while shredding.
          </BodySmall>
        </div>
      </li>
      <li className={styles.Question}>
        <button
          className={cx(styles.Heading, {
            [styles.HeadingOpen]: openQ === "board",
          })}
          onClick={() => setOpenQ("board")}
        >
          <Body className={styles.QuestionText}>What if she doesn't have a skateboard?</Body>
        </button>
        <div
          className={cx(styles.Answer, {
            [styles.AnswerOpen]: openQ === "board",
          })}
        >
          <BodySmall>
            Our amazing sponsor SHREDZ Shop wants to help! If you need help
            getting some wheels, get in touch and we'll get you rollin'.
          </BodySmall>
        </div>
      </li>
      <li className={styles.Question}>
        <button
          className={cx(styles.Heading, {
            [styles.HeadingOpen]: openQ === "register",
          })}
          onClick={() => setOpenQ("register")}
        >
          <Body className={styles.QuestionText}>How does she register?</Body>
        </button>
        <div
          className={cx(styles.Answer, {
            [styles.AnswerOpen]: openQ === "register",
          })}
        >
          <BodySmall>
           Prom Nigt Skate is a casual drop-in event and we don't currently require registration to attend. Come on down to the Cochrane Skate Park on Tuesday nights to join in on the fun!
          </BodySmall>
        </div>
      </li>
    </ul>
  );
};

export default FAQ;
