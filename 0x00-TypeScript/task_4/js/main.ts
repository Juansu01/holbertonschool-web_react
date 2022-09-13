interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Jennie",
    lastName: "Kim",
    age: 26,
    location: "Seoul",
}

const student2: Student = {
    firstName: "Lalisa",
    lastName: "Manobal",
    age: 25,
    location: "Seoul",
}

const studentsList: Array<Student> = [student1, student2]
const body: HTMLBodyElement = document.getElementsByTagName("body")[0]
const table: HTMLTableElement = document.createElement("table")
const thead: HTMLTableSectionElement = document.createElement("thead")
const tbody: HTMLTableSectionElement = document.createElement("tbody")
const rowHead: HTMLTableRowElement = thead.insertRow(0)
const cell1Head: HTMLTableCellElement = rowHead.insertCell(0)
cell1Head.innerHTML = "firstName"
const cell2Head: HTMLTableCellElement = rowHead.insertCell(1)
cell2Head.innerHTML = "location"

table.append(thead)

studentsList.forEach((student) => {
    const row: HTMLTableRowElement = tbody.insertRow(0)
    const firstCell: HTMLTableCellElement = row.insertCell(0)
    const secondCell: HTMLTableCellElement = row.insertCell(1);

    firstCell.innerHTML = student.firstName
    secondCell.innerHTML = student.location
})

table.append(tbody)
body.append(table)
