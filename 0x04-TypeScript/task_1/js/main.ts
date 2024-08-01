interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    location: 'USA'
};

const student2: Student = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 21,
    location: 'UK'
};

const studentsList: Array<Student> = [student1, student2];

const table = document.createElement('table');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');

const headerRow = document.createElement('tr');
const firstNameHeader = document.createElement('th');
const locationHeader = document.createElement('th');

firstNameHeader.textContent = 'First Name';
locationHeader.textContent = 'Location';

headerRow.appendChild(firstNameHeader);
headerRow.appendChild(locationHeader);
thead.appendChild(headerRow);

studentsList.forEach((student) => {
    const tr = document.createElement('tr');
    const firstNameCell = document.createElement('td');
    const locationCell = document.createElement('td');

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    tr.appendChild(firstNameCell);
    tr.appendChild(locationCell);
    tbody.appendChild(tr);
});

table.appendChild(tbody);
document.body.appendChild(table);
