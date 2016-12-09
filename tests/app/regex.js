if ( typeof window === 'undefined' ) {
  require('../../app/regex');
  var expect = require('chai').expect;
}

describe('regular expressions', function() {
  it('you should be able to detect a number in a string', function() {
    expect(regexAnswers.containsNumber('abc123')).to.eql(true);
    expect(regexAnswers.containsNumber('abc')).to.eql(false);
  });

  it('you should be able to determine whether a string matches a pattern', function() {
    // the pattern is XXX-XXX-XXXX where all X's are digits
    expect(regexAnswers.matchesPattern('800-555-1212')).to.eql(true);
    expect(regexAnswers.matchesPattern('451-933-7899')).to.eql(true);
    expect(regexAnswers.matchesPattern('33-444-5555')).to.eql(false);
    expect(regexAnswers.matchesPattern('abc-def-hijk')).to.eql(false);
    expect(regexAnswers.matchesPattern('1800-555-1212')).to.eql(false);
    expect(regexAnswers.matchesPattern('800-555-12121')).to.eql(false);
    expect(regexAnswers.matchesPattern('800-5555-1212')).to.eql(false);
    expect(regexAnswers.matchesPattern('800-55-1212')).to.eql(false);
  });
});
