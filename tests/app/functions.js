if ( typeof window === 'undefined' ) {
  require('../../app/functions');
  var expect = require('chai').expect;
}

describe('functions', function() {
  var sayItCalled = false;
  var sayIt = function(greeting, name, punctuation) {
        sayItCalled = true;
        return greeting + ', ' + name + (punctuation || '!');
      };

  beforeEach(function () {
    sayItCalled = false;
  });

  it('you should be able to use an array as arguments when calling a function', function() {
    var result = functionsAnswers.argsAsArray(sayIt, [ 'Hello', 'Miamed', '!' ]);
    expect(result).to.eql('Hello, Miamed!');
    expect(sayItCalled).to.be.ok;
  });

  it('you should be able to change the context in which a function is called', function() {
    var speak = function() {
          return sayIt(this.greeting, this.name, '!!!');
        };
    var obj = {
          greeting : 'Hello',
          name : 'Miamed'
        };

    var result = functionsAnswers.speak(speak, obj);
    expect(result).to.eql('Hello, Miamed!!!');
    expect(sayItCalled).to.be.ok;
  });

  it('you should be able to use arguments', function () {
    var a = Math.round(Math.random() * 10000);
    var b = Math.round(Math.random() * 10000);
    var c = Math.round(Math.random() * 10000);
    var d = Math.round(Math.random() * 10000);

    expect(functionsAnswers.useArguments(a)).to.eql(a);
    expect(functionsAnswers.useArguments(a, b)).to.eql(a + b);
    expect(functionsAnswers.useArguments(a, b, c)).to.eql(a + b + c);
    expect(functionsAnswers.useArguments(a, b, c, d)).to.eql(a + b + c + d);
  });
});
