import { getPrevLetter, getNextLetter, addPossibleWordToDoc } from './utils';

export const getWordOptions = (
  table,
  hand,
  minWordLength,
  superKiitos,
  dictionary,
  resultsObj
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
        addPossibleWordToDoc(resultsObj, word);
        potentialWords.push(word);
      }
    } else if (superKiitos) {
      if (
        word.length >= minWordLength &&
        word.length > table.length + 1 &&
        word.indexOf(table) > -1 &&
        (hand.includes(nextLetter) || hand.includes(prevLetter))
      ) {
        addPossibleWordToDoc(resultsObj, word);
        potentialWords.push(word);
      }
    }
  });

  return potentialWords;
};
