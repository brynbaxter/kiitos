import { startsWithTableWord } from './utils';

export const getWordOptions = (
  table,
  hand,
  minWordLength,
  superKiitos,
  dictionary
) => {
  let potentialWords = [];
  dictionary.forEach((word) => {
    let nextLetter = word.charAt(table.length);
    let prevLetter = word.indexOf(table) - 1;
    if (
      word.length >= minWordLength &&
      startsWithTableWord(table, word) &&
      hand.includes(nextLetter) &&
      word.length > table.length + 1
    ) {
      potentialWords.push(word);
    }
  });
  // arrange words in ascending length
  potentialWords.sort((a, b) => {
    return a.length - b.length;
  });
  return potentialWords;
};
