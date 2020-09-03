import React, { ReactNode } from "react";
import Context from "../storages/context";
import VideoPlayer from "../components/VideoPlayer";

type State = {
  open: boolean;
  url: string;
};

type Action = { type: "open"; url: string } | { type: "close" };

function VideoPlayerReducer(state: State, action: Action) {
  if (action.type === "open") {
    return { open: true, url: action.url };
  }

  if (action.type === "close") {
    return { open: false, url: "" };
  }

  return state;
}

const { Provider, useDispatch, useState } = Context(VideoPlayerReducer);

function View() {
  const { open, url } = useState();

  return <VideoPlayer open={open} play={url} />;
}

export const useVideoPlayerDispatch = useDispatch;

type Props = {
  children: ReactNode;
};
export function VideoPlayerProvider({ children }: Props) {
  return (
    <Provider init={{ open: false, url: "" }}>
      {children}
      <View />
    </Provider>
  );
}
