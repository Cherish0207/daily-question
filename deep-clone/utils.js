function isObject(obj) {
  return typeof obj === "object" || typeof obj === "function";
}
/**
 * 确定提供的值是否为原始值
 * @param {*} obj
 * @returns {Boolean} 返回一个布尔值
 */
function isPrimitive(obj) {
  return Object(obj) !== obj;
}
