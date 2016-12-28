export function getJsonItem(name, fallback) {
  return JSON.parse(localStorage.getItem(name)) || fallback;
}

export function setJsonItem(name, value) {
  return localStorage.setItem(name, JSON.stringify(value));
}