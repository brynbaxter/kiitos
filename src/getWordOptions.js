import { getPrevLetter, getNextLetter } from './utils';

export const getWordOptions = (
  table,
  hand,
  minWordLength,
  superKiitos,
  dictionary
) => {
  let potentialWords = [];
  dictionary.forEach((word) => {
    let nextLetter = getNextLetter(table, word); // letter that could be placed at front of table to continue forming word
    let prevLetter = getPrevLetter(table, word); // letter that could be placed at end of table to continue forming words
    if (!superKiitos) {
      if (
        word.length >= minWordLength &&
        word.length > table.length + 1 &&
        word.indexOf(table) > -1 &&
        hand.includes(nextLetter)
      ) {
        potentialWords.push(word);
      }
    } else if (superKiitos) {
      if (
        word.length >= minWordLength &&
        word.length > table.length + 1 &&
        word.indexOf(table) > -1 &&
        (hand.includes(nextLetter) || hand.includes(prevLetter))
      ) {
        potentialWords.push(word);
      }
    }
  });

  return potentialWords;
};
