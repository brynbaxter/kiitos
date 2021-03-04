import { getWordOptions } from './getWordOptions';
import { addPossibleWordsToDoc } from './utils';

const xmlhttp = new XMLHttpRequest();
const url =
  'https://raw.githubusercontent.com/dwyl/english-words/master/words_alpha.txt';

let fourLetterPlusArr;
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let dictionaryFile = this.responseText;
    const wordArr = dictionaryFile.replace(/\r/g, '').split('\n');
    fourLetterPlusArr = wordArr.filter(word => word.length >= 4);

    // arrange words in ascending length
    fourLetterPlusArr.sort((a, b) => {
      return a.length - b.length;
    });
  }
};
xmlhttp.open('GET', url, true);
xmlhttp.send();

const form = document.querySelector('.wordSearch');
const resultsObj = document.querySelector('#resultList');

form.addEventListener('submit', e => {
  e.preventDefault();
  resultsObj.innerHTML = '';
  console.log('this worked!');
  let table = form.tableWord.value; // str
  let hand = form.userHand.value.split(''); // char array
  let minWordLength = form.minLength.checked ? 5 : 4; // 4 or 5
  let superKiitos = form.superKiitos.checked; // bool
  getWordOptions(
    table,
    hand,
    minWordLength,
    superKiitos,
    fourLetterPlusArr,
    resultsObj
  );
});
