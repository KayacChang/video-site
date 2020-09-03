import React, { useState, useCallback } from "react";
import styles from "./Pagination.module.scss";
import { inRange } from "../functions";

type TabProps = {
  text: string;
  visibility?: boolean;
  clickable?: boolean;
  active?: boolean;
  onClick?: () => void;
};

function Tab({
  text,
  visibility = true,
  clickable = true,
  active = false,
  onClick = () => {},
}: TabProps) {
  return (
    <button
      style={{
        visibility: visibility ? "visible" : "hidden",
        pointerEvents: clickable ? "auto" : "none",
        background: active ? "#d91921" : "",
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

type Props = {
  defaultPage?: number;
  count?: number;
  rowsPerPage?: number;
  onChange?: (page: number) => void;
};
export default function Pagination({
  defaultPage = 1,
  count = 1,
  rowsPerPage = 1,
  onChange = () => {},
}: Props) {
  const min = 1;
  const max = Math.ceil(count / rowsPerPage);

  const [page, setPage] = useState(defaultPage);

  const onTabClick = useCallback(
    (page: number) => {
      setPage(page);
      onChange(page);
    },
    [setPage, onChange]
  );

  if (!inRange(min, max, page)) {
    return <></>;
  }

  return (
    <div className={styles.pagination}>
      <Tab
        text={String("<<")}
        visibility={page > min}
        onClick={() => onTabClick(1)}
      />
      <Tab
        text={"<"}
        visibility={page > min}
        onClick={() => onTabClick(page - 1)}
      />

      <Tab
        text={String(page - 1)}
        visibility={page > min}
        onClick={() => onTabClick(page - 1)}
      />
      <Tab text={String(page)} clickable={false} active={true} />
      <Tab
        text={String(page + 1)}
        visibility={page < max}
        onClick={() => onTabClick(page + 1)}
      />

      <Tab
        text={">"}
        visibility={page < max}
        onClick={() => onTabClick(page + 1)}
      />
      <Tab
        text={String(">>")}
        visibility={page < max}
        onClick={() => onTabClick(max)}
      />
    </div>
  );
}
