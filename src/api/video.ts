import { curry } from "ramda";
import { Functor } from "../functions";
import { Video } from "../models/video";

function getHost() {
  return Functor(new URL("https://www.googleapis.com/youtube/v3/videos"));
}

function appendSearchParam(key: string, value: string, url: URL) {
  url.searchParams.append(key, value);

  return url;
}
const append = curry(appendSearchParam);

type Props = {
  part: string[];
  chart?: "mostPopular";
  maxResults?: number;
  pageToken?: string;
  id?: string;
};

export function getVideo({
  part,
  chart,
  maxResults,
  pageToken,
  id,
}: Props): Promise<Video> {
  const target = getHost()
    .map(append("part", part.join(",")))
    .map(append("key", process.env.REACT_APP_API_KEY || ""));

  if (chart) {
    target.map(append("chart", chart));
  }
  if (maxResults) {
    target.map(append("maxResults", String(maxResults)));
  }
  if (pageToken) {
    target.map(append("pageToken", pageToken));
  }
  if (id) {
    target.map(append("id", id));
  }

  return fetch(target.value.href).then((resp) => resp.json());
}
