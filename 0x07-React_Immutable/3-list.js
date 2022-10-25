import { List } from 'immutable';

export function getListObject(array) {
  const myList = List(array)
  return myList;
}

export function addElementToList(list, element) {
  return list.push(element);
}
