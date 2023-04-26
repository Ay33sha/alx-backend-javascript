export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const int8view = new Int8Array(buffer);
  if (int8view.length > position) {
    int8view[position] = value;
  } else { throw Error('Position outside range'); }

  const view = new DataView(buffer);
  return view;
}
