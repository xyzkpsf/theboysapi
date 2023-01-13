export const baseUrl = "http://www.theboysapi.com/api";

export const totalCharacters = 73;

export const getRandomInteger = (): number[] => {
  const arr = [];
  while (arr.length < 6) {
    var r = Math.floor(Math.random() * totalCharacters) + 1;
    if (arr.indexOf(r) === -1) arr.push(r);
  }
  return arr;
};
