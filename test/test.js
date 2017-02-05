var should = require('should');
var testFile = require('../index.js');

console.log(testFile.test1());

describe('10 + number', function(){
    it('should = 20', function(done){
        var total = testFile.test1(10);
        total.should.equal(20);  
        done();
    })
    it('should >= 20', function(done){
        var total = testFile.test1(20);
        total.should.be.above(20);  
        done();
    })
})