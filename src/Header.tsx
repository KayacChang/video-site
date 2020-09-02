import React from "react";
import styles from "./Header.module.scss";
import LOGO_IMG from "assets/netflix-logo.png";

function Logo() {
  return (
    <a aria-label="netflix" className={styles.icon} href="/">
      <img src={LOGO_IMG} alt="netflix" />
    </a>
  );
}

export default function Nav() {
  return (
    <header className={styles.header}>
      <Logo />
    </header>
  );
}
