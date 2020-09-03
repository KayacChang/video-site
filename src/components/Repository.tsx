import React, { useState, memo } from "react";
import VideoCard from "./VideoCard";
import { Item } from "../models/video";
import VideoCardGroup from "./VideoCardGroup";
import Pagination from "./Pagination";
import { times, when, differenceWith } from "ramda";
import styles from "./Repository.module.scss";

const rowsPerPage = 12;

type Props = {
  videos: Item[];
};

function areEqual({ videos: prev }: Props, { videos: next }: Props) {
  if (prev.length !== next.length) {
    return false;
  }

  return differenceWith((x, y) => x.id === y.id, prev, next).length === 0;
}

const Display = memo(({ videos }: Props) => {
  return (
    <VideoCardGroup>
      {times(
        (id: number) =>
          when(Boolean, (data: Item) => (
            <VideoCard key={String(id)} data={data} />
          ))(videos[id]),
        rowsPerPage
      )}
    </VideoCardGroup>
  );
}, areEqual);

export default function Repository({ videos }: Props) {
  const [page, setPage] = useState(1);
  const idx = page - 1;

  return (
    <section className={styles.repository}>
      <Display
        videos={videos.slice(idx * rowsPerPage, (idx + 1) * rowsPerPage)}
      />
      <Pagination
        className={styles.pagination}
        count={videos.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onClick={(page) => setPage(page)}
      />
    </section>
  );
}
