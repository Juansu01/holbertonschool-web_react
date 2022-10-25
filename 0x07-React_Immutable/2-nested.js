import { Map } from 'immutable';

export default function accessImmutableObject(object, array) {
  const toMap = Map(object)
  const value = toMap.getIn(array);
  return value;
}
