if ( typeof window === 'undefined' ) {
  require('../../app/ZalandoTest');
  var expect = require('chai').expect;
}

describe('zalando tests ', function() {
  var fileData = {
    files : [
      {
        dir : 'js',
        files:'main,app,build'
      },
      {
        dir : 'css',
        files:'bootstrap,foundation'
      }

    ]
  };
  it('add tow arrays with different dimentsions ', function() {
    expect(zalandoAnswers.addTowArrays([1,2,3,5], [1,2,3])).to.eql( [2,4,6,5]);
    expect(zalandoAnswers.addTowArrays([1,2,3], [1,2,3,9])).to.eql( [2,4,6,9]);
    expect(zalandoAnswers.addTowArrays([1,0,0], [1,2,3])).to.eql( [2,2,3]);
    expect(zalandoAnswers.addTowArrays([1,0,0], [1,2,3,4,5,6])).to.eql( [2,2,3,4,5,6]);

  });

  it('seperate the joson object to mulible items due to files propertie in side the main Files property ', function() {
    var result =  zalandoAnswers.dublicateJSON(fileData);
    expect(result.files.length).to.eql( 5);

  });
  it('test factors of somenumber ', function() {
   
   var result = zalandoAnswers.findFactors(12);
    expect(result).to.eql( [1,12,2,6,3,4]);
    expect(result.length).to.eql(6);

    result = zalandoAnswers.findFactors(9);
 expect(result).to.eql( [1,9,3,3]);
    expect(result.length).to.eql(4);
  });
});
