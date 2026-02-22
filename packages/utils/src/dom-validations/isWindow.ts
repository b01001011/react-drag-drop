function isWindow(element: Object): element is typeof window {
  const elementString = Object.prototype.toString.call(element);
  return (
    elementString === '[object Window]' ||
    elementString === '[object global]' // For electron.
  );
}

export {
  isWindow
}
