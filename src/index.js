import { getWordOptions } from './getWordOptions';
import { addSomethingToDoc } from './utils';

const xmlhttp = new XMLHttpRequest();
const url =
  'https://raw.githubusercontent.com/dwyl/english-words/master/words_alpha.txt';

let fourLetterPlusArr;
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let dictionaryFile = this.responseText;
    const wordArr = dictionaryFile.replace(/\r/g, '').split('\n');
    fourLetterPlusArr = wordArr.filter((word) => word.length >= 4);
  }
};
xmlhttp.open('GET', url, true);
xmlhttp.send();

const form = document.querySelector('.wordSearch');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let table = form.tableWord.value;
  let hand = form.userHand.value.split('');
  let minWordLength = form.minLength.checked ? 5 : 4;
  let superKiitos = form.superKiitos.checked;
  let potentialWords = getWordOptions(
    table,
    hand,
    minWordLength,
    superKiitos,
    fourLetterPlusArr
  );
  addSomethingToDoc(potentialWords);
});
