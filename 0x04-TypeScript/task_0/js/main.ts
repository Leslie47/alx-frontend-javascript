interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

const teacher1: Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: true,
    location: 'USA',
    contract: 'full-time'
};

interface Directors extends Teacher {
    numberOfReports: number;
}
const director1: Directors = {
    firstName: 'Jane',
    lastName: 'Doe',
    fullTimeEmployee: true,
    location: 'UK',
    numberOfReports: 3
};

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}
function printTeacher(firstName: string, lastName: string): string {
    return `${firstName.charAt(0)}. ${lastName}`;
}

console.log(printTeacher(teacher1.firstName, teacher1.lastName));
console.log(teacher1);

interface StudentClassConstructor{
    new (firstName: string, lastName: string): StudentClassInterface;
}
interface StudentClassInterface {
    [x: string]: any;
    firstName: string;
    lastName: string;
}

class Student implements StudentClassInterface {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework() {
        return 'Currently working';
    }

    displayName() {
        return this.firstName;
    }
}

const student: StudentClassInterface = new Student('John', 'Doe');
console.log(student.displayName());
console.log(student.workOnHomework());
