
exports = (typeof window === 'undefined') ? global : window;

exports.zalandoAnswers = {
  addTowArrays: function (arr1, arr2){
 
var lengthDiff= Math.abs(arr1.length - arr2.length);
 var length;

if (lengthDiff) {
     length = arr1.length >= arr2.length ? arr2.length:arr1.length;
 }else {
      length = arr2.length;
 }

  var result=[];

  for (var i = 0; i < length ; i++) {
  var  resultItem=arr1[i]+ arr2[i];

  result.push(resultItem);

  }

if (lengthDiff) {
  for (  i  ; i < lengthDiff+length ; i++) {
  var  resultItem= arr1[i] || arr2[i];

  result.push(resultItem);

  }
}
  // if (arr1[length-1] ===undefined) {
  //   result.push(arr2[length-1]);
  // }else if(arr2[length-1]===undefined){
  //   result.push(arr1[length-1]);
  // }else {
  //   result.push(arr1[length-1]+arr2[length-1]);
  // }

  return result;
},

dublicateJSON:function(data){
  // var data = {
  //   files : [
  //     {
  //       dir : 'js',
  //       files:'main , app, build'
  //     },
  //     {
  //       dir : 'css',
  //       files:'bootstrap , foundation'
  //     }
  //
  //   ]
  // };
   
  var result={};
  result.files=[];

  data.files.forEach( function(item,index){
  var filesArr=  item.files.split(',');
filesArr.forEach(function (file){
result.files.push({dir:item.dir , files:file}); // add new item of the singel file name
 });


  });

  return result;
},

// fabonnaci:function(n){
//  var a =0, b=1;
//  var result=1; 
//  for(var i =2; i< = n ; i ++){

// result=a+b ; 
// a=b ; 
// b=result;

//  }
//  return f; 
// }, 

// fabonacciRecursiv:function(n){
// if (n< 2 ) {
//   return 1 ;
// }else{

//   return fabonacciRecursiv(n-1) + fabonacciRecursiv(n-2);
// }

// }, 

findFactors:function(N){
//12 : [1,12] , [2,6] , [3,4]

var result=[];
 
result.push(1);
result.push(N);
 for (var i = 2; i <= N-1; i++) {
 
  if (N % i ===0) { // fi the number is devisible ....

    if (!result.includes(i)) { // check if result includes factorial
     result.push(i);
      
     result.push(N/i)

    }
  }

 
   
 }
  return result;
}, // end of funciton 

missingInteger:function (A) {
    var onlyPositiveInt = [];
    for (var i =0; i < A.length; i++){
        if (A[i] > 0 ){
            onlyPositiveInt[A[i]] = true;
        }
    }
    for (i = 1; i <= onlyPositiveInt.length; i++){
        if (!onlyPositiveInt[i]){
            return i;
        }
    }
    return 1;
} , 

removeDublicatString: function (str){

  // sssddeees   => sde
  //abaic       => abic
  
}
};
