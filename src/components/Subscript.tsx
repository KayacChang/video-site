import React, { CSSProperties, MouseEvent, useState, useCallback } from "react";
import styles from "./Subscript.module.scss";

type Props = {
  active?: boolean;
  style?: CSSProperties;
  onChange?: (state: boolean) => void;
};
export default function Subscript({
  active: _active = false,
  style,
  onChange = () => {},
}: Props) {
  const [active, setActive] = useState(_active);

  const handle = useCallback(
    (event: MouseEvent) => {
      event.stopPropagation();

      setActive((active) => !active);
      onChange(!active);
    },
    [active, onChange]
  );

  return (
    <button className={styles.subscript} style={style} onClick={handle}>
      {active ? "★" : "☆"}
    </button>
  );
}
