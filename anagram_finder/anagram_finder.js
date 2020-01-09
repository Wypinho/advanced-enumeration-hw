const AnagramFinder = function (word) {
  this.word = word.split('')
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {
  let isAnagram = false;
  const anagrams = [];
  otherWordsSplit = otherWords.map(word => word.split(''));
  otherWordsSplit.filter((word) => {
    if (word.every(letter => this.word.includes(letter))) {
      joinedWord = word.join('');
      if (word.length === this.word.length)
        anagrams.push(joinedWord);
    }
  });
  return anagrams
  // console.log(word);
}

module.exports = AnagramFinder;
