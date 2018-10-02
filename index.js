require('dotenv').config();

const moment = require('moment');

const primeGenerator = require('./lib/prime-generator');
const gridFormatter = require('./lib/grid-formatter');

const TIME_DISPLAY_FORMAT = 'HH:mm:ss.SSS';

function main(opts) {
    const targetNumber = opts.targetNumber;
    const pg = opts.pg;
    const gf = opts.gf;

    console.log('Running prime generator...');

    const startTime = moment();

    const primeNumbers = pg.getPrimeNumbers(targetNumber);

    console.log('Finished generating numbers');

    const endTime = moment();

    // Better to print the numbers rather then build a string due to memory constraints
    gf.printGridWith(primeNumbers);

    console.log(`Generation start time: ${startTime.format(TIME_DISPLAY_FORMAT)}`);
    console.log(`Generation end time: ${endTime.format(TIME_DISPLAY_FORMAT)}`);

    const durationSeconds = moment.duration(endTime.diff(startTime)).asSeconds();

    console.log(`Prime number generation time: ${durationSeconds} seconds`);
}

// Run script standalone
if (require.main === module) {
    const argv = require('./lib/argv');

    main({
        targetNumber: argv.n || argv.number,
        pg: primeGenerator,
        gf: gridFormatter
    });
}

module.exports = (targetNumber, pg = primeGenerator, gf = gridFormatter) => {
    main({ targetNumber, pg, gf });
};