function deepCopy(source) {
  const target = Array.isArray(source) ? [] : {};
  for (let key in source) {
    if (typeof source[key] === "object") {
      target[key] = deepCopy(source[key]);
    } else {
      target[key] = source[key];
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
