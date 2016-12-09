exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
  containsNumber : function(str) {
var regex = /\d/g;
return regex.test(str);
  },

  matchesPattern : function(str) {
    var regex = /^\d{3}-\d{3}-\d{4}$/g;
return regex.test(str);
  }
};
