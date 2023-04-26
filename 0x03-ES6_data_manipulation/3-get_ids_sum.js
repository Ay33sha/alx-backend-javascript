export default function getStudentIdsSum(array) {
  const sum = array.reduce((accum, curr) => {
    // eslint-disable-next-line no-param-reassign
    accum.id += curr.id;
    return accum;
  });
  return sum.id;
}
