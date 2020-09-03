import React, { useEffect, useState } from "react";
import Page from "../components/Page";
import { getVideo } from "../api/video";
import VideoCard from "../components/VideoCard";
import { Item } from "../api/types";
import VideoCardGroup from "../components/VideoCardGroup";
import Pagination from "../components/Pagination";

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

      if (data.nextPageToken) init(data.nextPageToken);
    }

    init();
  }, [rowsPerPage]);

  const idx = page - 1;
  const current = videos.slice(idx * rowsPerPage, (idx + 1) * rowsPerPage);

  return (
    <section>
      <VideoCardGroup>
        {current.map((video) => (
          <VideoCard key={video.id} data={video} />
        ))}
      </VideoCardGroup>
      <Pagination
        style={{
          position: "absolute",
          bottom: "6vh",
          left: "50vw",
        }}
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
