import React, { CSSProperties, MouseEvent, useCallback } from "react";
import styles from "./Subscript.module.scss";
import { useSubscriptDispatch } from "../storages/subscript";

type Props = {
  active?: boolean;
  style?: CSSProperties;
  videoID: string;
};
export default function Subscript({ active = false, style, videoID }: Props) {
  const dispatch = useSubscriptDispatch();

  const handle = useCallback(
    (event: MouseEvent) => {
      event.stopPropagation();

      dispatch(active ? { type: "remove", videoID } : { type: "add", videoID });
    },
    [active, videoID, dispatch]
  );

  return (
    <button className={styles.subscript} style={style} onClick={handle}>
      {active ? "★" : "☆"}
    </button>
  );
}
