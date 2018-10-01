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

    const exceptionScenarios = [
        {
            input: undefined,
            exception: 'Undefined target number passed'
        },
        {
            input: null,
            exception: 'Undefined target number passed'
        },
        {
            input: 0,
            exception: 'Undefined target number passed'
        },
        {
            input: '',
            exception: 'Undefined target number passed'
        },
        {
            input: 'w',
            exception: 'The passed "w" value is not a number'
        },
        {
            input: '1w',
            exception: 'The passed "1w" value is not a number'
        },
        {
            input: 3.14,
            exception: 'Number must be an integer'
        },
        {
            input: -1,
            exception: 'Number must be 1 or above'
        }
    ];

    exceptionScenarios.forEach(es => {
        it(`I get an exception for "${es.input}" input`, function() {
            should.throw(() => subject.getPrimeNumbers(es.input), es.exception);
        });
    });
});