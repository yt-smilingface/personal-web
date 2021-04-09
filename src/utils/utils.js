/**
 * 时间戳转标准时间格式
 * @param {*} data 传入的时间戳
 * @param {*} type type = day时转单位为天，  type = date时单位为时分秒
 * @returns 输出标准时间格式
 */
  export function formatDate(data, type = 'day') {
    var date = new Date(parseInt(data));
    var YY = date.getFullYear() + "-";
    var MM = (date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1) + "-";
    var DD = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    var hh = (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) + ":";
    var mm = (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) + ":";
    var ss = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    if (type == "date") {
      return YY + MM + DD + " " + hh + mm + ss;
    } else if (type == "day") {
      return YY + MM + DD;
    }
  }

  /**
   * 判断数值是否为空
   * @param {*} val 传入需要判断的数值
   * @returns 如果为空，输出true，如果不为空，输出false
   */
  export function isValNull(val) {
    if (val === "" || val === null || val === undefined || val === "null" || 
        val === "undefined" || JSON.stringify(val) == "{}" || JSON.stringify(val) == "[]") {
      return true;
    } else {
      return false;
    }
  }