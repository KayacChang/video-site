import React, { useEffect, useState } from "react";
import Page from "../components/Page";
import { getVideo } from "../api/video";
import VideoCard from "../components/VideoCard";
import { Item } from "../api/types";
import VideoCardGroup from "../components/VideoCardGroup";

type SectionTitle = "mostPopular";
type Props = {
  title: SectionTitle;
};

function Section({ title }: Props) {
  const [videos, setVideos] = useState([] as Item[]);

  useEffect(() => {
    async function run() {
      const data = await getVideo();

      setVideos((list) => [...list, ...data.items]);
    }

    run();
  }, []);

  return (
    <section>
      <h3>{title}</h3>
      <VideoCardGroup>
        {videos.map((video) => (
          <VideoCard key={video.id} data={video} />
        ))}
      </VideoCardGroup>
    </section>
  );
}

export default function Browse() {
  return (
    <Page>
      <Section title={"mostPopular"} />
    </Page>
  );
}
