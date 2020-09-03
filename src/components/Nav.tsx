import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.scss";

type Props = {
  to: string;
  children?: ReactNode;
  active?: boolean;
};
export default function Nav({ children, to, active = false }: Props) {
  return (
    <Link
      to={to}
      className={styles.nav}
      style={{ fontWeight: active ? 700 : "normal" }}
    >
      {children}
    </Link>
  );
}
