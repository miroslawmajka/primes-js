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

    const endTime = moment();

    const gridString = gf.getGridString(primeNumbers);

    console.log(gridString);

    console.log(`Start time: ${startTime.format(TIME_DISPLAY_FORMAT)}`);
    console.log(`End time: ${endTime.format(TIME_DISPLAY_FORMAT)}`);
    console.log(`Time taken: ${moment.duration(endTime.diff(startTime)).asSeconds()} seconds`);

    console.log('Finished');
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