const IsogramFinder = function (word) {
  this.word = word.split('');
}

IsogramFinder.prototype.isIsogram = function () {
  return (new Set(this.word)).size === this.word.length;
}

module.exports = IsogramFinder;
