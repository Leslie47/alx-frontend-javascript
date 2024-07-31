export default function updateStudentGradeByCity(getStudents, city, newGrades) {
  return getStudents
    .filter((student) => student.location === city)
    .map((student) => {
      const grade = newGrades.filter((newGrade) => newGrade.studentId === student.id);
      if (grade.length === 0) {
        return { ...student, grade: 'N/A' };
      }
      return { ...student, grade: grade[0].grade };
    });
}
