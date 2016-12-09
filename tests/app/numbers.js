if ( typeof window === 'undefined' ) {
  require('../../app/numbers');
  var expect = require('chai').expect;
}

describe('numbers', function() {
  describe('binary operations', function() {
    it('you should be able to return the base10 representation of a binary string', function() {
      expect(numbersAnswers.base10('11000000')).to.eql(192);
    });
  });
});
