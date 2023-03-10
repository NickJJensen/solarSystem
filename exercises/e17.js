export function minBy(array, cb) {
  let min = array[0];
  if (!array || array.length == 0) {
   return undefined
  } else {
   for (let i = 0; i < array.length; i++) {
     if (cb(array[i]) < cb(min)) {
       min = array[i]
     }
   }
  }
  return min;
}

export function maxBy(array, cb) {
  let max = array[0];
 if (!array || array.length == 0) {
  return undefined
 } else {
  for (let i = 0; i < array.length; i ++) {
    if (cb(array[i]) > cb(max)) {
      max = array[i]
    }
  }
 }
 return max;
}
