const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase.split('');
}

PangramFinder.prototype.isPangram = function () {
  return this.alphabet.every((letter) => {
    // console.log(letter);
    return this.phrase.includes(letter) || letter === " ";
  });
};

// pangram = new PangramFinder('this is not a pangram so the result should be false')
// console.log(pangram.phrase);
// console.log(pangram.alphabet);

module.exports = PangramFinder;
