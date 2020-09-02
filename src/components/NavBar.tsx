import React from "react";
import styles from "./NavBar.module.scss";
import LOGO_IMG from "assets/netflix-logo.png";

function Logo() {
  return (
    <a aria-label="netflix" className={styles.icon} href="/">
      <img src={LOGO_IMG} alt="netflix" />
    </a>
  );
}

export default function NavBar() {
  return (
    <header className={styles.header}>
      <Logo />
    </header>
  );
}
