import React from "react";
import styles from "./styles/Header.module.css";
import Svg from "../imgs/Svg";

const Header = () => {
  return (
    <header className={styles.container}>
      <Svg />
      <div className={styles.w}>
        <ul className={styles.listHolder}>
          <li className={styles.list}>
            <a href="0">Home</a>
          </li>
          <li className={styles.list}>
            <a href="1">About</a>
          </li>
          <li className={styles.list}>
            <a href="2">Contact</a>
          </li>

          <li className={`${styles.hide} ${styles.list}`}>
            <a href="3">Login</a>
          </li>
          <li className={`${styles.hide} ${styles.list} ${styles.btn}`}>
            <a href="4">Sign up</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
