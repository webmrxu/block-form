export default {
  // 两对象深合并 obj1 -> obj2
  deepMerge(obj1, obj2) {
    let key
    for (key in obj2) {
      obj1[key] = obj1[key] && obj1[key].toString() === "[object Object]" ? this.deepMerge(obj1[key], obj2[key]) : obj1[key] = obj2[key]
    }
    return obj1
  }
}
