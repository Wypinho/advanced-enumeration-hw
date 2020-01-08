const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase.toLowerCase().split('');
}

PangramFinder.prototype.isPangram = function () {
  return this.alphabet.every((letter) => {
    // console.log(letter);
    if (this.phrase.includes(letter) || letter === " ")
      return true;
    else
      return false;
  });
};

// pangram = new PangramFinder('this is not a pangram so the result should be false')
// console.log(pangram.phrase);
// console.log(pangram.alphabet);

module.exports = PangramFinder;
