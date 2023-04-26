/* eslint-disable no-param-reassign */
export default function updateStudentGradeByCity(studentArray, location, gradeArray) {
  return studentArray.filter((student) => student.location === location).map((student) => {
    for (const studentGrade of gradeArray) {
      if (studentGrade.studentId === student.id) {
        student.grade = studentGrade.grade;
        return student;
      }
    }
    student.grade = 'N/A';
    return student;
  });
}
