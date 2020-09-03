import React from "react";
import styles from "./VideoCard.module.scss";
import { Item } from "../api/types";

type Props = {
  data: Item;
};

export default function VideoCard({ data }: Props) {
  const img = data.snippet.thumbnails.medium.url;
  const title = data.snippet.title;
  const description = data.snippet.description;

  return (
    <div className={styles.card}>
      <a href="/">
        <img src={img} alt={img} />
        <h5>{title}</h5>
        <p>{description}</p>
      </a>
    </div>
  );
}
