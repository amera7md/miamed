exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  base10: function(str) {
return parseInt(str,2);
  }
};
