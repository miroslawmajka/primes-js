/* eslint-disable prefer-arrow-callback */

const chai = require('chai');
const should = chai.should();

const subject = require('../lib/prime-generator-brutal');

describe('When I run the brutal prime generator', function() {
    it('I get a bunch of prime number in an array', function() {
        const primeNumbers = subject.getPrimeNumbers(5);

        should.exist(primeNumbers);
        primeNumbers.should.to.be.an('array');
        primeNumbers.length.should.equal(5);
        primeNumbers[0].should.equal(2);
        primeNumbers[1].should.equal(3);
        primeNumbers[2].should.equal(5);
        primeNumbers[3].should.equal(7);
        primeNumbers[4].should.equal(11);
    });
});