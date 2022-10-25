import { Seq } from 'immutable';

export default function printBestStudents(object) {
  const seq = Seq(object);

  const filtered = seq.filter((student) => {
    return student.score > 70;
  });

  function capitalizeString(string) {
    return string[0].toUpperCase() + string.substring(1);
  }

  const studentObject = filtered.toJS();

  Object.keys(studentObject).map((key) => {
    studentObject[key].firstName = capitalizeString(studentObject[key].firstName);
    studentObject[key].lastName = capitalizeString(studentObject[key].lastName);
    return studentObject[key];
  });

  console.log(studentObject);
}
