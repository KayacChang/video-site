import React, { PropsWithChildren } from "react";
import styles from "./VideoCardGroup.module.scss";

export default function VideoCardGroup({ children }: PropsWithChildren<{}>) {
  return <div className={styles.group}>{children}</div>;
}
