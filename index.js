require('dotenv').config();

const moment = require('moment');

const defaultPrimeGenerator = require('./lib/prime-generator');
const defaultGridFormatter = require('./lib/grid-formatter');

const TIME_DISPLAY_FORMAT = 'HH:mm:ss.SSS';

function main(opts) {
    console.log(`\nPrime Number Generator (version ${require('./package.json').version})\n`);

    const targetNumber = opts.targetNumber;

    if (!targetNumber) {
        console.log('Usage:');
        console.log('\tnode index.js -n TARGET');
        console.log('\tnode index.js --number TARGET\n');

        process.exit(0);
    }

    const primeGenerator = opts.primeGenerator;
    const gridFormatter = opts.gridFormatter;

    console.log('Running prime generator...');

    const startTime = moment();

    const primeNumbers = primeGenerator.getPrimeNumbers(targetNumber);

    console.log(`Finished generating ${targetNumber} numbers`);

    const endTime = moment();

    // Better to print the numbers rather then build a string due to memory constraints
    gridFormatter.printGridWith(primeNumbers);

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
        primeGenerator: defaultPrimeGenerator,
        gridFormatter: defaultGridFormatter
    });
}

module.exports = (targetNumber, primeGenerator = defaultPrimeGenerator, gridFormatter = defaultGridFormatter) => {
    main({ 
        targetNumber, 
        primeGenerator, 
        gridFormatter 
    });
};