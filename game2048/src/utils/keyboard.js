import hotkeys from 'hotkeys-js';

const observerMap = {};

function executeCallBacks(key) {
  for (const ob of observerMap[key]) {
    ob();
  }
}

export function addKeyObserver(key, callback) {
  if (!observerMap[key]) {
    observerMap[key] = [];
    hotkeys(key, () => executeCallBacks(key));
  }
  observerMap[key].push(callback);
}

export function removeKeyObserver(key, callback) {
  observerMap[key] = observerMap[key].filter((item) => item !== callback);
}
