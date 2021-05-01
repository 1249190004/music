export const throttle = function (func, delay) {
  let prev = Date.now();
  return function () {
    let context = this;
    let args = arguments;
    let now = Date.now();
    if (now - prev >= delay) {
      func.apply(context, args);
      prev = Date.now();
    }
  }
}

export const debounce = function (fn, wait) {
  let timeout = null;
  return function () {
    if (timeout !== null)
      clearTimeout(timeout);
    timeout = setTimeout(fn, wait);
  }
}
