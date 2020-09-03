import React, { useEffect, useState } from "react";
import Page from "../components/Page";
import { getVideo } from "../api/video";
import VideoCard from "../components/VideoCard";
import { Item } from "../api/types";
import VideoCardGroup from "../components/VideoCardGroup";
import Pagination from "../components/Pagination";

type Props = {
  title: string;
};

function Section({ title }: Props) {
  const rowsPerPage = 12;
  const [videos, setVideos] = useState([] as Item[]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    async function run() {
      const data = await getVideo({
        part: ["snippet", "contentDetails", "statistics"],
        chart: "mostPopular",
        maxResults: rowsPerPage,
      });

      console.log(data);

      setTotal(data.pageInfo.totalResults);
      setVideos((list) => [...list, ...data.items]);
    }

    run();
  }, [rowsPerPage]);

  return (
    <section>
      <h3>{title}</h3>
      <VideoCardGroup>
        {videos.map((video) => (
          <VideoCard key={video.id} data={video} />
        ))}
      </VideoCardGroup>
      <Pagination count={total} rowsPerPage={rowsPerPage} />
    </section>
  );
}

export default function Browse() {
  return (
    <Page>
      <Section title={"Most Popular"} />
    </Page>
  );
}
