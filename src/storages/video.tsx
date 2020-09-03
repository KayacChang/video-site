import Context from "./context";
import { Item } from "../models/video";
import { indexBy, prop } from "ramda";

type State = Record<string, Item>;
type Action = { type: "add"; videos: Item[] };

function VideoReducer(state: State, action: Action) {
  if (action.type === "add") {
    return { ...state, ...indexBy(prop("id"), action.videos) };
  }

  return state;
}

export const {
  Provider: VideoProvider,
  useDispatch: useVideoDispatch,
  useState: useVideoState,
} = Context(VideoReducer);
