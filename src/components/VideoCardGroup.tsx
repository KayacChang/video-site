import React, { ReactNode } from "react";
import styles from "./VideoCardGroup.module.scss";
import clsx from "clsx";

type Props = {
  children: ReactNode;
  className?: string;
};
export default function VideoCardGroup({ children, className }: Props) {
  return <div className={clsx(styles.group, className)}>{children}</div>;
}
