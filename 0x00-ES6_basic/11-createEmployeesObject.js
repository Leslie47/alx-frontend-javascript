/* eslint-disable linebreak-style */
/* eslint-disable semi */
// eslint-disable-next-line import/extensions
export default function createEmployeesObject(departmentName, employees) {
  const employeesObject = {
    [departmentName]: employees,
  };

  return employeesObject;
}
