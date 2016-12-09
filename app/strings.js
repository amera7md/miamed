exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
var result='';

 
var tempChar='';
var tempCounter=0;
 for (var i = 0; i < str.length; i++) {

  if (tempChar !=str[i]) { // if we see a new charachter in the string ,
    tempChar=str[i]; // we consider this charachter a new one and start the counter according to it  .
    tempCounter=1;


  }else { // if it a repeated character then will increase the counter
    tempCounter ++;

  }
  if (tempCounter > amount) {
  //  // heere will we remove the repeated characters form the sting array
  //  strArr.splice(i,1,'*');
 }else {
   result=result+str[i];
 }
} // end for loop ..........
// result=strArr.join('');
// var reg= /\*/g;
// result=result.replace(reg,"")
return result;

  }
};
