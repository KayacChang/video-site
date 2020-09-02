import React, { PropsWithChildren } from "react";
import styles from "./Page.module.scss";

export default function Page({ children }: PropsWithChildren<{}>) {
  return (
    <main className={styles.page}>
      <div>{children}</div>
    </main>
  );
}
