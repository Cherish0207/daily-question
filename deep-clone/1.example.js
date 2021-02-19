function deepCopy(obj) {
  const target = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      target[key] = deepCopy(obj[key]);
    } else {
      target[key] = obj[key];
    }
  }
  return target;
}
var obj = {
  a: 1,
  b: 2,
  c: [1, 2, 3],
  d: { aa: 1, bb: 2 },
};
obj.e = obj;
console.log("obj, ", obj); // 不会报错

const objCopy = deepCopy(obj);
console.log("objCopy", objCopy);
// Uncaught RangeError: Maximum call stack size exceeded
