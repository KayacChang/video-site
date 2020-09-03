import React, { useCallback } from "react";
import ReactPlayer from "react-player";
import styles from "./VideoPlayer.module.scss";
import { useVideoPlayerDispatch } from "../pages/VideoPlayer";

type CloseProps = {
  onClick: () => void;
};
function Close({ onClick }: CloseProps) {
  return (
    <button className={styles.close} onClick={onClick}>
      <h2>{"X"}</h2>
    </button>
  );
}

type Props = {
  play: string;
  open: boolean;
};
export default function VideoPlayer({ play, open }: Props) {
  const dispatch = useVideoPlayerDispatch();

  const close = useCallback(() => dispatch({ type: "close" }), [dispatch]);

  return (
    <div
      className={styles.videoPlayer}
      style={{ display: open ? "flex" : "none" }}
      onClick={close}
    >
      <Close onClick={close} />
      <ReactPlayer playing controls url={play} />
    </div>
  );
}
