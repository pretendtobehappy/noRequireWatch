/**
     * 函数防抖
     * @param   fn        频繁触发的函数   type Function
     * @param   delay     延迟           type Number
     * @param   immediate 是否立即触发一次 type Boolean
     */
const debounce = (fn, delay = 600, immediate = true) => {
  let time = null
  let is_executed = false
  return function () {
    clearTimeout(time)
    if (immediate) {
      if (!is_executed) {
        fn.call(this, arguments)
        is_executed = true
      } else {
        time = setTimeout(() => {
          fn.call(this, arguments)
        }, delay)
      }
    } else {
      time = setTimeout(() => {
        fn.call(this, arguments)
      }, delay)
    }
  }
}
/**
     * 函数节流
     * @param fn        频繁触发的函数   type Function
     * @param delay     延迟            type Number
     * @param limit     必触发时间限制   type Number
     */
const throttle = (fn, delay = 600, limit = 1000) => {
  let timer = null;
  let previous = null;
  let result;

  return function () {
    // 记录当前时刻
    let now = +new Date();
    // 记录上次开始时间
    !previous && (previous = now);
    // 达到限制时间手动触发一次函数执行
    if (now - previous > limit) {
      // 绑定this和event对像
      result = fn.apply(this, arguments);
      // 重置上一次开始时间为本次结束时间
      previous = now;
    } else {
      // 限制在规定时间内重复触发无效
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(this, arguments)
      }, delay);
    }
    return result;
  }
}

module.exports = {
  debounce,
  throttle
}