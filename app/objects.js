exports = (typeof window === 'undefined') ? global : window;

exports.objectsAnswers =  {
  alterContext : function(fn, obj) {
return fn.call(obj);
  },

  iterate : function(obj) {
var result=[];
 
for (var prop in obj){
if(obj.hasOwnProperty(prop)){
  result.push(prop + ": "+obj[prop]);
}
}
return result;
  }
};
