import React from "react";
import styles from "./VideoCard.module.scss";
import { Item } from "../models/video";
import Subscript from "./Subscript";
import { useSubscriptState } from "../storages/subscript";
import { parseDuration } from "../functions";
import Duration from "./Duration";

type Props = {
  data: Item;
};
export default function VideoCard({ data }: Props) {
  const img = data.snippet.thumbnails.medium.url;
  const title = data.snippet.title;
  const description = data.snippet.description;
  const time = parseDuration(data.contentDetails.duration);

  const subscript = useSubscriptState();

  return (
    <div className={styles.card}>
      <div style={{ position: "relative" }}>
        <Subscript
          videoID={data.id}
          active={subscript.includes(data.id)}
          style={{
            position: "absolute",
          }}
        />
        <Duration
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
          }}
          time={time}
        />
        <img src={img} alt={img} />
      </div>
      <h5>{title}</h5>
      <p>{description}</p>
    </div>
  );
}
