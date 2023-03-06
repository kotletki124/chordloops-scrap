const subscribers = new Map();

function updateSubscribers() {
  subscribers.forEach((callback, node) => {
    callback(node, settings);
  });
}

export function subscribeToSettingsChange(node, callback) {
  subscribers.set(node, callback);
}

export function unsubscribeFromSettingsChange(node) {
  subscribers.delete(node);
}

export function checkIfSubscribed(node) {
  return subscribers.has(node);
}

const defaultSettings = JSON.parse(localStorage.getItem("scriptSettings")) || {
  mainLabel: "letter",
  secondaryLabel: "numeral",
  showBoth: true,
  sign: "sharp",
};

export const settings = new Proxy(defaultSettings, {
  set(target, key, value) {
    if (target[key] !== value) {
      target[key] = value;
      updateSubscribers();
      localStorage.setItem("scriptSettings", JSON.stringify(target));
    }
    return true;
  },
});
