if ( typeof window === 'undefined' ) {
  require('../../app/modules');
  var expect = require('chai').expect;
}

describe('the module pattern', function() {
  it('you should be able to create a function that returns a module', function() {
    var module = modulesAnswers.createModule('hello', 'mo');

    expect(module.sayIt).to.be.a('function');
    expect(module.name).to.eql('mo');
    expect(module.greeting).to.eql('hello');
    expect(module.sayIt()).to.eql('hello, mo');

    module.name = 'tobi';
    module.greeting = 'hi';
    expect(module.name).to.eql('tobi');
    expect(module.greeting).to.eql('hi');
    expect(module.sayIt()).to.eql('hi, tobi');
  });
});
