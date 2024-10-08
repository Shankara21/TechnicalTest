function throttle(func, delay) {
  let shouldWait = false;

  return function (...args) {
    if (!shouldWait) {
      func.apply(this, args);
      shouldWait = true;

      setTimeout(() => {
        shouldWait = false;
      }, delay);
    }
  };
}

const logWithTime = throttle((msg) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${msg}`);
}, 2000);

let count = 0;
const intervalId = setInterval(() => {
  count++;
  logWithTime(`Message ${count}`);

  if (count === 10) {
    clearInterval(intervalId);
  }
}, 500);
