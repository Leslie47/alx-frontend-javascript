/* eslint-disable linebreak-style */
/* eslint-disable semi */
// eslint-disable-next-line import/extensions
export default function createIteratorObject(report) {
  const employees = report.allEmployees;
  const allEmployees = [];
  for (const department in employees) {
    if (Object.prototype.hasOwnProperty.call(employees, department)) {
      for (const idx of employees[department]) {
        allEmployees.push(idx);
      }
    }
  }

  return allEmployees;
}
