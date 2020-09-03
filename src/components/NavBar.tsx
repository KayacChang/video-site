import React, { ReactNode } from "react";
import styles from "./NavBar.module.scss";
import LOGO_IMG from "assets/netflix-logo.png";

function Logo() {
  return (
    <a aria-label="netflix" className={styles.icon} href="/">
      <img src={LOGO_IMG} alt="netflix" />
    </a>
  );
}

type Props = {
  children: ReactNode;
};
export default function NavBar({ children }: Props) {
  return (
    <header className={styles.header}>
      <Logo />

      <div className={styles.links}>{children}</div>
    </header>
  );
}
