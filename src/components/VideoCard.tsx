import React from "react";
import styles from "./VideoCard.module.scss";
import { Item } from "../api/types";

type Props = {
  data: Item;
};

export default function VideoCard({ data }: Props) {
  const img = data.snippet.thumbnails.medium.url;

  return (
    <div className={styles.card}>
      <img src={img} alt={img} />
    </div>
  );
}
