const clearLocalStorage = () => localStorage.clear();

const getFromLocalStorage = (key: string) => {
  const item = localStorage.getItem(key);
  return item && JSON.parse(item);
};

const removeFromLocalStorage = (key: string) => localStorage.removeItem(key);

const removeMultipleFromLocalStorage = (keys: string[]) =>
  keys.map(localStorage.removeItem);

const setIntoLocalStorage = (key: string, value: any) =>
  localStorage.setItem(key, JSON.stringify(value));

export {
  clearLocalStorage,
  getFromLocalStorage,
  removeFromLocalStorage,
  removeMultipleFromLocalStorage,
  setIntoLocalStorage,
};
