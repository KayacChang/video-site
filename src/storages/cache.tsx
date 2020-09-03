import { set, get } from "idb-keyval";
import { isNil } from "ramda";

export default function Cache<S>(key: string, defaultValue: S) {
  return {
    set(value: S) {
      return set(key, JSON.stringify(value));
    },
    get(): Promise<S> {
      return get(key).then((val) => {
        return !isNil(val) ? JSON.parse(val as string) : defaultValue;
      });
    },
  };
}
