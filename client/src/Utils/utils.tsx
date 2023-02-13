export const baseUrl = 'https://www.theboysapi.com/api';

export const totalCharacters = 73;

export const getRandomInteger = (): number[] => {
  const arr = [];
  while (arr.length < 8) {
    var r = Math.floor(Math.random() * totalCharacters) + 1;
    if (arr.indexOf(r) === -1 && r !== 57) arr.push(r);
  }
  return arr;
};
