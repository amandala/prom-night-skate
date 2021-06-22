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
        {/* <li className={styles.Link}>
          <Link href="/">
            <a className={styles.Item}> About Us</a>
          </Link>
        </li> */}
        <li className={styles.Link}>
            <a href="https://shop.shredzshop.com/shredz-skateboard-camp-2021.html" className={styles.Item} target="_blank">Skate Camps</a>
        </li>
        {/* <li className={styles.Link}>
          <Link href="/">
            <a className={styles.Item}>Our Friends</a>
          </Link>
        </li> */}
      </ul>
    </div>
  );
};

export default Nav;
