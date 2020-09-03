import React, { CSSProperties } from "react";
import styles from "./Duration.module.scss";

type Props = {
  time: Date;
  style: CSSProperties;
};
export default function Duration({ time, style }: Props) {
  const display = [time.getHours(), time.getMinutes(), time.getSeconds()]
    .filter(Boolean)
    .join(":");

  return (
    <span className={styles.duration} style={style}>
      {display}
    </span>
  );
}
