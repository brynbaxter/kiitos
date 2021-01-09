const startsWithTableWord = (table, word) => {
  return word.indexOf(table) == 0;
};

const containsTableWord = (table, word) => {
  return word.indexOf(table) > -1;
};

const getPrevLetter = (table, word) => {
  let index = word.indexOf(table);
  if (index < 1) {
    return '';
  } else {
    return word.slice(index - 1, index);
  }
};

const results = document.querySelector('#resultList');
const addSomethingToDoc = (potentialWords) => {
  results.innerHTML = '';
  potentialWords.forEach((word) => {
    let html = `<li class="word-option">
        <span>${word}</span>
      </li>
    `;
    results.innerHTML += html;
  });
};

export { containsTableWord, getPrevLetter, addSomethingToDoc };
