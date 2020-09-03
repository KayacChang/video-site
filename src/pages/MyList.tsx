import React from "react";
import Page from "../components/Page";
import Repository from "../components/Repository";
import { useVideoState } from "../storages/video";
import { useSubscriptState } from "../storages/subscript";

export default function MyList() {
  const videos = useVideoState();
  const subscript = useSubscriptState();

  return (
    <Page>
      <Repository videos={subscript.map((id) => videos[id])} />
    </Page>
  );
}
