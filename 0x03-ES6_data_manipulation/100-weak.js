export const weakMap = new WeakMap();

export function queryAPI(endPoint) {
  if (weakMap.get(endPoint) >= 4) {
    throw new Error('Endpoint load is high');
  }
  if (weakMap.get(endPoint) === undefined) {
    weakMap.set(endPoint, 1);
  } else {
    weakMap.set(endPoint, weakMap.get(endPoint) + 1);
  }
  return endPoint;
}
