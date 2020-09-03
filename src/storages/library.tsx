import Context from "./context";

type State = string[];

type Action =
  | { type: "add"; videoID: string }
  | { type: "remove"; videoID: string };

function libraryReducer(state: State, action: Action) {
  if (action.type === "add") {
    return [...state, action.videoID];
  }

  if (action.type === "remove") {
    return state.filter((id) => id !== action.videoID);
  }

  return state;
}

export const {
  Provider: LibraryProvider,
  useDispatch: useLibraryDispatch,
  useState: useLibraryState,
} = Context(libraryReducer);
