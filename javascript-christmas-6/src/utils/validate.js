export function isEmpty(str) {
  return str.length === 0;
}

export function isTrimed(str) {
  const trimedStr = str.replaceAll(' ', '');
  return trimedStr === str;
}

export function isNatural(num) {
  return Number.isInteger(num) && num > 0;
}
