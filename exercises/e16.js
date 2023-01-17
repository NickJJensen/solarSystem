// see e16.md

export function find(array, callback) {
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      arr.push(array[i])
    }
  }
  return arr[0];
}
