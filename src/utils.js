const startsWithTableWord = (table, word) => {
  return word.indexOf(table) == 0;
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

export { startsWithTableWord, addSomethingToDoc };
