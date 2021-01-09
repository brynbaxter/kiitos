import { containsTableWord, getPrevLetter } from './utils';

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
    let prevLetter = getPrevLetter(table, word);
    if (
      word.length >= minWordLength &&
      word.length > table.length + 1 &&
      containsTableWord(table, word) &&
      hand.includes(nextLetter)
    ) {
      potentialWords.push(word);
    }
  });

  return potentialWords;
};
