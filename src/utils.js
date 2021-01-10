const getNextLetter = (table, word) => {
  let index = word.indexOf(table) + table.length;
  if (index < word.length) {
    return word.slice(index, index + 1);
  }
};

const getPrevLetter = (table, word) => {
  let index = word.indexOf(table);
  if (index > 1) {
    return word.slice(index - 1, index);
  }
};

const results = document.querySelector('#resultList');
const addPossibleWordsToDoc = (potentialWords) => {
  results.innerHTML = '';
  potentialWords.forEach((word) => {
    let html = `<li class="word-option">
        <span>${word}</span>
      </li>
    `;
    results.innerHTML += html;
  });
};

export { getPrevLetter, getNextLetter, addPossibleWordsToDoc };
