import { curry } from "ramda";
import { Functor } from "../functions";
import { Video } from "./types";

function getHost() {
  return Functor(new URL("https://www.googleapis.com/youtube/v3/videos"));
}

function appendSearchParam(key: string, value: string, url: URL) {
  url.searchParams.append(key, value);

  return url;
}

export function getVideo(): Promise<Video> {
  const append = curry(appendSearchParam);

  const { href } = getHost()
    .map(append("part", "snippet"))
    .map(append("chart", "mostPopular"))
    .map(append("key", process.env.REACT_APP_API_KEY || "")).value;

  return fetch(href).then((resp) => resp.json());
}
