if ( typeof window === 'undefined' ) {
  require('../../app/strings');
  var expect = require('chai').expect;
}

describe('strings', function() {
  it('you should be able to reduce duplicate characters to a desired minimum', function() {
    expect(stringsAnswers.reduceString('aaaabbbb', 2)).to.eql('aabb');
    expect(stringsAnswers.reduceString('xaaabbbb', 2)).to.eql('xaabb');
    expect(stringsAnswers.reduceString('aaaabbbb', 1)).to.eql('ab');
    expect(stringsAnswers.reduceString('aaxxxaabbbb', 2)).to.eql('aaxxaabb');
  });
});
