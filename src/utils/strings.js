export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function removeLastCharacter(string) {
  return string.substring(0, string.length - 1);
}