import { fromJS } from 'immutable';

export default function accessImmutableObject(object, array) {
  const toMap = fromJS(object);
  const value = toMap.getIn(array, undefined);
  return value;
}
