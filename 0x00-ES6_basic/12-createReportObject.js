/* eslint-disable linebreak-style */
/* eslint-disable semi */
// eslint-disable-next-line import/extensions
export default function createReportObject(employeesList) {
  const report = {
    allEmployees: employeesList,
    getNumberOfDepartments(employees) {
      return Object.keys(employees).length;
    },
  };

  return report;
}
