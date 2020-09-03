import React from "react";
import styles from "./Pagination.module.scss";
import { inRange } from "../functions";
import clsx from "clsx";

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
  page?: number;
  count?: number;
  rowsPerPage?: number;
  onClick?: (page: number) => void;
  className?: string;
};
export default function Pagination({
  page = 1,
  count = 1,
  rowsPerPage = 1,
  onClick = () => {},
  className,
}: Props) {
  const min = 1;
  const max = Math.ceil(count / rowsPerPage);

  if (!inRange(min, max, page)) {
    return <></>;
  }

  return (
    <div className={clsx(styles.pagination, className)}>
      <Tab
        text={String("<<")}
        visibility={page > min}
        onClick={() => onClick(1)}
      />
      <Tab
        text={"<"}
        visibility={page > min}
        onClick={() => onClick(page - 1)}
      />

      <Tab
        text={String(page - 1)}
        visibility={page > min}
        onClick={() => onClick(page - 1)}
      />
      <Tab text={String(page)} clickable={false} active={true} />
      <Tab
        text={String(page + 1)}
        visibility={page < max}
        onClick={() => onClick(page + 1)}
      />

      <Tab
        text={">"}
        visibility={page < max}
        onClick={() => onClick(page + 1)}
      />
      <Tab
        text={String(">>")}
        visibility={page < max}
        onClick={() => onClick(max)}
      />
    </div>
  );
}
