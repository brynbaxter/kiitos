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

const addPossibleWordToDoc = (resultsObj, word) => {
  let html = `<li class="word-option">
        <span>${word}</span>
      </li>
    `;
  resultsObj.innerHTML += html;
};

export { getPrevLetter, getNextLetter, addPossibleWordToDoc };
