/* eslint-disable prefer-arrow-callback */

const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const chai = require('chai');
chai.use(sinonChai);
const should = chai.should();

const subject = require('../lib/grid-formatter');

describe('When I call the grid formatting functions', function() {
    it('I get a string with a formatter number grid', function() {
        const gridString = subject.getGridString([2, 3, 5]);

        should.exist(gridString);

        gridString.should.to.be.a('string');

        gridString.should.equal('| |2|3|5|\n|2|4|6|10|\n|3|6|9|15|\n|5|10|15|25|');
    });

    it('The print grid function prints the number grid', function() {
        const printerSpy = sinon.spy();

        subject.printGridWith([2, 3, 5], printerSpy);

        printerSpy.should.have.callCount(4);
        printerSpy.should.have.been.calledWith('| |2|3|5|');
        printerSpy.should.have.been.calledWith('|2|4|6|10|');
        printerSpy.should.have.been.calledWith('|3|6|9|15|');
        printerSpy.should.have.been.calledWith('|5|10|15|25|');
    });
});