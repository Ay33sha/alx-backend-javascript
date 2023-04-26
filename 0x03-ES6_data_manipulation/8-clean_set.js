export default function cleanSet(set, startString) {
  let array = Array.from(set);
  if (typeof startString !== 'string' || startString === '') {
    return [].join('-');
  }
  array = array.filter((ele) => {
    if (ele === undefined) {
      return false;
    }
    return ele.startsWith(String(startString));
  });
  array = array.map((ele) => ele.slice(startString.length));
  return array.join('-');
}
