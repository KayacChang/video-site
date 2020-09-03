import Context from "./context";
import Cache from "./cache";

type State = string[];

type Action =
  | { type: "add"; videoID: string }
  | { type: "remove"; videoID: string };

const cache = Cache<State>("Subscript", []);

function SubscriptReducer(state: State, action: Action) {
  if (action.type === "add") {
    state = [...state, action.videoID];

    cache.set(state);

    return state;
  }

  if (action.type === "remove") {
    state = state.filter((id) => id !== action.videoID);

    cache.set(state);

    return state;
  }

  return state;
}

export function getSubscriptCache() {
  return cache.get();
}

export const {
  Provider: SubscriptProvider,
  useDispatch: useSubscriptDispatch,
  useState: useSubscriptState,
} = Context(SubscriptReducer);
