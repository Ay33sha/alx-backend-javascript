export default function getStudentsByLocation(array, location) {
  if (Array.isArray(array)) { return array.filter((student) => student.location === location); }
  return [];
}
