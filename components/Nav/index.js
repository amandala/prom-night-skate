import React from "react";
import Link from "next/link";
import styles from "./index.module.scss";

const Nav = () => {
  return (
    <div className={styles.Wrapper}>
      <ul className={styles.Items}>
        <li className={styles.Link}>
          <Link href="/">
            <a className={styles.Item}>Updates</a>
          </Link>
        </li>
        <li className={styles.Link}>
          <Link href="/">
            <a className={styles.Item}> About Us</a>
          </Link>
        </li>
        <li className={styles.Link}>
          <Link href="/">
            <a className={styles.Item}>Skate Camps</a>
          </Link>
        </li>
        <li className={styles.Link}>
          <Link href="/">
            <a className={styles.Item}>Our Friends</a>
          </Link>
        </li>
        <li className={styles.Link}>
          <Link href="/">
            <a className={styles.Item}>Donate</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
