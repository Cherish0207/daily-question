function deepCopy(source, hash = new Set()) {
  const target = Array.isArray(source) ? [] : {};
  for (const [key, value] of Object.entries(source)) {
    if (!hash.has(value) && !isPrimitive(value)) {
      hash.add(value);
      target[key] = deepCopy(value, hash);
    } else {
      target[key] = value;
    }
  }
  return target;
}
const obj = {
  a: 1,
  b: 2,
  c: [1, 2, 3],
  d: { aa: 1, bb: 2 },
};
// obj.__proto__ = { f: 4 };
obj.e = obj;
console.log("obj, ", obj); // 不会报错

const objCopy = deepCopy(obj);
console.log("objCopy", objCopy);
