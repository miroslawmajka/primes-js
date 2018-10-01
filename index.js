const primeGeneratorBrutal = require('./lib/prime-generator-brutal');

function main(targetNumber) {
    console.log('Running prime generator...');

    // TODO: add a better algorithm

    const primeNumbers = primeGeneratorBrutal.getPrimeNumbers(targetNumber);

    console.log(primeNumbers);

    // TODO: print the numbers in a nice way

    console.log('Finished');
}

// Run script standalone
if (require.main === module) {
    const argv = require('./lib/argv');

    // TODO: introduce input validation

    main(argv.n || argv.number);
}

module.exports = main;