/* eslint-disable no-underscore-dangle */
// export default class HolbertonCourse {
//   constructor(name, length, students) {
//     this._name = HolbertonCourse._validateName(name);
//     this._length = HolbertonCourse._validateLength(length);
//     this.students = HolbertonCourse._validateStudents(students);
//   }

//   // Getters and setters for name
//   get name() {
//     return this._name;
//   }

//   set name(value) {
//     this.name = HolbertonCourse._validateName(value);
//   }

//   get length() {
//     return this._length;
//   }

//   set length(value) {
//     this._length = HolbertonCourse._validateLength(value);
//   }

//   get students() {
//     return this._students;
//   }

//   set students(value) {
//     this._students = HolbertonCourse._validateStudents(value);
//   }

//   // Private method to validate name
//   static _validateName(value) {
//     if (typeof value !== 'string') {
//       throw new TypeError('Name must be a string');
//     }
//     return value;
//   }

//   // Private method to validate length
//   static _validateLength(value) {
//     if (typeof value !== 'number') {
//       throw new TypeError('Length must be a number');
//     }
//     return value;
//   }

//   // Private method to validate students
//   static _validateStudents(value) {
//     if (
//       !Array.isArray(value)
//       || !value.every((item) => typeof item === 'string')
//     ) {
//       throw new TypeError('Students must be an array of strings');
//     }
//     return value;
//   }
// }
export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') throw new TypeError('name must be a string');
    if (!Number.isInteger(length)) throw new TypeError('length must be a number');
    if (!Array.isArray(students)) throw new TypeError('students type must be an Array');

    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(val) {
    if (typeof val !== 'string') throw new TypeError('name must be a string');
    this._name = val;
  }

  get length() {
    return this._length;
  }

  set length(val) {
    if (!Number.isInteger(val)) throw new TypeError('length must be a number');
    this._length = val;
  }

  get students() {
    return this._students;
  }

  set students(val) {
    if (!Array.isArray(val)) throw new TypeError('students type must be an Array');
    this._students = val;
  }
}
