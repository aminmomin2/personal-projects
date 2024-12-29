function getRandomWordFromCategories(words) {
  const categories = Object.keys(words.wordCategories);
  const randomCategory = categories[Math.floor(Math.random() * categories.length)];
  const wordsInCategory = words.wordCategories[randomCategory];
  const randomWord = wordsInCategory[Math.floor(Math.random() * wordsInCategory.length)];
  return randomWord;
}

function getAllWords(words) {
  const allWords = [];
  for (const category in words.wordCategories) {
    allWords.push(...words.wordCategories[category]);
  }
  return allWords;
}

function generateRandomWords(number, words) {
  const array = [];
  const arrayLength = number ? parseInt(number, 10) : 1
  if (number > getAllWords(words).length) {
    return getAllWords(words)
  }

  for (let i = 0; i < arrayLength; i++) {
    array.push(getRandomWordFromCategories(words))
  }

  return array
}

module.exports = {generateRandomWords, getAllWords}