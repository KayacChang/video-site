import React, { useEffect } from "react";
import Page from "../components/Page";
import Repository from "../components/Repository";
import { getVideo } from "../api/video";
import { useVideoDispatch, useVideoState } from "../storages/video";

export default function Browse() {
  const dispatch = useVideoDispatch();
  const videos = useVideoState();

  useEffect(() => {
    async function init(pageToken?: string) {
      const data = await getVideo({
        part: ["snippet", "contentDetails"],
        chart: "mostPopular",
        maxResults: 12,
        pageToken,
      });

      dispatch({ type: "add", videos: data.items });

      data.nextPageToken && init(data.nextPageToken);
    }

    init();
  }, [dispatch]);

  return (
    <Page>
      <Repository videos={Object.values(videos)} />
    </Page>
  );
}
