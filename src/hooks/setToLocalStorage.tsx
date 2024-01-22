export const setToLocalStorage = (nameItem: string, item: any) => {
  window.localStorage.setItem(nameItem, JSON.stringify(item));
};
