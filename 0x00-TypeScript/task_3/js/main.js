var student1 = {
    firstName: "Jennie",
    lastName: "Kim",
    age: 26,
    location: "Seoul"
};
var student2 = {
    firstName: "Lalisa",
    lastName: "Manobal",
    age: 25,
    location: "Seoul"
};
var studentsList = [student1, student2];
var body = document.getElementsByTagName("body")[0];
var table = document.createElement("table");
var thead = document.createElement("thead");
var tbody = document.createElement("tbody");
var rowHead = thead.insertRow(0);
var cell1Head = rowHead.insertCell(0);
cell1Head.innerHTML = "firstName";
var cell2Head = rowHead.insertCell(1);
cell2Head.innerHTML = "location";
table.append(thead);
studentsList.forEach(function (student) {
    var row = tbody.insertRow(0);
    var firstCell = row.insertCell(0);
    var secondCell = row.insertCell(1);
    firstCell.innerHTML = student.firstName;
    secondCell.innerHTML = student.location;
});
table.append(tbody);
body.append(table);
