import { Map } from 'immutable';

export default function getImmutableObject(object) {
  const immutableObject = Map(object);
  return immutableObject;
}
