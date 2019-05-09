export default {
  /**
   * 两对象深合并 branch -> master
   * @param {*} branch 分支对象
   * @param {*} master 主对象
   * 以主对象为主，当分支和主对象有冲突
   * @example
   *   let a = {a:'a'}
   *   let b = {a:'b'}
   *   deepMerge(a, b); // {a: 'b'}
   */
  deepMerge(branch, master) {
    let key
    for (key in master) {
      branch[key] = branch[key] && branch[key].toString() === "[object Object]" ? this.deepMerge(branch[key], master[key]) : branch[key] = master[key]
    }
    return branch
  },
  /**
   * 时间格式化
   * yyyy 年
   * MM 月 dd 日 hh 时 mm 分 ss 秒 S 毫秒
   * @param {*} date data对象
   * @param {*} fmt 格式
   * @example this.formatDate(date, 'yyyy-MM-dd hh:mm:ss');
   */
  formatDate(date, fmt) {
    var o = {
      "M+": date.getMonth() + 1,
      "d+": date.getDate(),
      "h+": date.getHours(),
      "m+": date.getMinutes(),
      "s+": date.getSeconds(),
      "S": date.getMilliseconds()
    }
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length))
    }
    for (var k in o) {
      if (new RegExp("(" + k + ")").test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)))
      }
    }
    return fmt
  }
}
