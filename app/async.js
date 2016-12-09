exports = (typeof window === 'undefined') ? global : window;

// you can use jQuery ;)

exports.asyncAnswers = {
  async : function(value) {
       return Promise.resolve(value);
  },

  manipulateRemoteData : function(url) { 
   var list = [];

// jQuery.ajaxSetup({
//   dataFilter: function(data) {
//     result = JSON.parse(data);
//       result.people.forEach( function (item) {    list.push(item.name)  ;});
//     return JSON.stringify(list);
//   }
// });
     

       

    return    $.ajax( {
    	url: url 
    	,dataFilter : function(data){
    	 result = JSON.parse(data);
      result.people.forEach( function (item) {    list.push(item.name)  ;});
    return JSON.stringify(list);
    }

    }  
    	

    	);
 

// myFunc.then(function(){
// 	  console.log("Then block hit!");
// });
   
  }
};
