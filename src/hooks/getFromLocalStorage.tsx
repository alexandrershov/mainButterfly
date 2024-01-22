export const getFromLocalStorage = (nameItem: string) => {
  const item = localStorage.getItem(nameItem);
  if (!item) return null;
  return JSON.parse(item);
};
