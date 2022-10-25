import { fromJS } from 'immutable';

export default function getImmutableObject(object) {
    const immutableObject = fromJS(object);
    return immutableObject;
}
