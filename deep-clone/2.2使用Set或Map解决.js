function deepCopy(source, hash = new WeakMap()) {
  if (!isObject(source)) return source;
  if (hash.has(source)) return hash.get(source); // 有，直接返回

  const target = Array.isArray(source) ? [] : {};
  // 没有，将当前对象作为key，克隆对象作为value进行存储
  hash.set(source, target); // 给hash设值
  for (const [key, value] of Object.entries(source)) {
    if (isObject(value)) {
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
