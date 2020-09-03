import React, { useEffect, useState } from "react";
import Page from "../components/Page";
import { getVideo } from "../api/video";
import VideoCard from "../components/VideoCard";
import { Item } from "../api/types";
import VideoCardGroup from "../components/VideoCardGroup";
import Pagination from "../components/Pagination";
import styles from "./Browse.module.scss";
import { times, when } from "ramda";

function Section() {
  const rowsPerPage = 12;
  const [videos, setVideos] = useState([] as Item[]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function init(pageToken?: string) {
      const data = await getVideo({
        part: ["snippet", "contentDetails"],
        chart: "mostPopular",
        maxResults: rowsPerPage,
        pageToken,
      });

      setTotal(data.pageInfo.totalResults);
      setVideos((videos) => [...videos, ...data.items]);

      data.nextPageToken && init(data.nextPageToken);
    }

    init();
  }, [rowsPerPage]);

  return (
    <section className={styles.section}>
      <VideoCardGroup>
        {times(
          (id: number) =>
            when(Boolean, (data: Item) => (
              <VideoCard key={String(id)} data={data} />
            ))(videos[(page - 1) * rowsPerPage + id]),
          rowsPerPage
        )}
      </VideoCardGroup>
      <Pagination
        className={styles.pagination}
        count={total}
        rowsPerPage={rowsPerPage}
        page={page}
        onClick={(page) => setPage(page)}
      />
    </section>
  );
}

export default function Browse() {
  return (
    <Page>
      <Section />
    </Page>
  );
}
