import React, { useEffect, useState } from "react";
import Page from "../components/Page";

import { getVideo } from "../api/video";
import VideoCard from "../components/VideoCard";
import { Item } from "../api/types";

function Section() {
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
      <h3>Recommend To You</h3>
      {videos.map((video) => (
        <VideoCard key={video.id} data={video} />
      ))}
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
