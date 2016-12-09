exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(data) {
    var files= [];
    for (var i = 0; i < data.files.length; i++) {
    if ( typeof(data.files[i])== "object" ) {
      Array.prototype.push.apply(files,this.listFiles(data.files[i]));

        }else {
          files.push(data.files[i])
        }
    }

return files;
  }
};
