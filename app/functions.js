exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {

      return fn.apply(this ,arr);
  },

  speak : function(fn, obj) {
   return  fn.call(obj);
  },

  useArguments : function() {
    var sum=0
for (var i = 0; i < arguments.length; i++) {
sum=sum+  arguments[i]
}
return sum;
  }
};
