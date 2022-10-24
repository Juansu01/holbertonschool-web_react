import { getListObject, addElementToList } from './3-list.js';

const testList = ['Cyno', 'Raiden Shogun']

const immutableList = getListObject(testList)

console.log(immutableList)
console.log(addElementToList(immutableList, 'Lisa'))
