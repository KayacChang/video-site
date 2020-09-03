import { times, identity, pipe } from "ramda";
import parseDuration from "./time";

export { parseDuration };

export const range = (func: (idx: number) => any, count: number) =>
  times(pipe(identity, func), count);

export function inRange(min: number, max: number, value: number) {
  return min <= value && value <= max;
}

type MappingFunc = (x: any) => any;
export function Functor(value: any) {
  return {
    value,
    map: (mapping: MappingFunc) => Functor(mapping(value)),
  };
}
