import React, { useEffect } from "react";
import Page from "../components/Page";
import Repository from "../components/Repository";
import { useVideoState, useVideoDispatch } from "../storages/video";
import { useSubscriptState } from "../storages/subscript";
import { getVideo } from "../api/video";

export default function MyList() {
  const dispatch = useVideoDispatch();
  const videos = useVideoState();
  const subscript = useSubscriptState();

  useEffect(() => {
    subscript.forEach(async (id) => {
      if (videos[id]) {
        return;
      }

      const video = await getVideo({
        part: ["snippet", "contentDetails"],
        id,
      });

      dispatch({ type: "add", videos: video.items });
    });
  }, [videos, subscript, dispatch]);

  return (
    <Page>
      <Repository videos={subscript.map((id) => videos[id]).filter(Boolean)} />
    </Page>
  );
}
