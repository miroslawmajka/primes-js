/* eslint-disable prefer-arrow-callback */

const chai = require('chai');
const should = chai.should();

const subject = require('../lib/prime-generator');

describe('When I run the prime generator', function() {
    it('I get 20 prime number in an array', function() {
        const primeNumbers = subject.getPrimeNumbers(20);

        should.exist(primeNumbers);

        primeNumbers.should.to.be.an('array');
        primeNumbers.length.should.equal(20);

        primeNumbers[0].should.equal(2);
        primeNumbers[1].should.equal(3);
        primeNumbers[2].should.equal(5);
        primeNumbers[3].should.equal(7);
        primeNumbers[4].should.equal(11);
    });

    it('I get an exception for empty input', function() {
        should.throw(() => subject.getPrimeNumbers(), 'Undefined target number passed');
    });

    it('I get an exception for not a number', function() {
        should.throw(() => subject.getPrimeNumbers('w'), 'The passed "w" value is not a number');
    });

    it('I get an exception for not an integer', function() {
        should.throw(() => subject.getPrimeNumbers(3.14), 'Number must be an integer');
    });

    it('I get an exception for number below 1', function() {
        should.throw(() => subject.getPrimeNumbers(-1), 'Number must be 1 or above');
    });
});