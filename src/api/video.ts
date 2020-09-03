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

type Props = {
  part: string[];
  chart: "mostPopular";
  maxResults: number;
  pageToken?: string;
};

export function getVideo({
  part,
  chart,
  maxResults,
  pageToken,
}: Props): Promise<Video> {
  const append = curry(appendSearchParam);

  const target = getHost()
    .map(append("part", part.join(",")))
    .map(append("chart", chart))
    .map(append("maxResults", String(maxResults)))
    .map(append("key", process.env.REACT_APP_API_KEY || ""));

  if (pageToken) {
    target.map(append("pageToken", pageToken));
  }

  return fetch(target.value.href).then((resp) => resp.json());
}
