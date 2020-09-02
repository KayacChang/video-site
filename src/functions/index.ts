type MappingFunc = (x: any) => any;

export function Functor(value: any) {
  return {
    value,
    map: (mapping: MappingFunc) => Functor(mapping(value)),
  };
}
