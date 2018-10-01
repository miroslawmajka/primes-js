const INITIAL_NUMBER = 2;

function getPrimeNumbers(targetNumber) {
    validateInput(targetNumber);

    const primeNumbers = [INITIAL_NUMBER];

    // Start with "3" and go only through odd numbers
    let i = INITIAL_NUMBER + 1;

    while (primeNumbers.length < targetNumber) {
        if (isPrime(i)) primeNumbers.push(i);

        i += 2;
    }

    return primeNumbers;
}

function validateInput(targetNumber) {
    if (!targetNumber) throw new Error('Undefined target number passed');

    const invalidInputMsg = `The passed "${targetNumber}" value is not a number`;

    if (isNaN(targetNumber)) throw new Error(invalidInputMsg);

    if (!Number.isInteger(targetNumber)) throw new Error('Number must be an integer');

    if (targetNumber < 1) throw new Error('Number must be 1 or above');
}

function isPrime(number) {
    printDebug(`Checking if "${number}" is prime...`);

    // If the test factor is greater than the square root of the candidate then the candidate is a prime number
    const sqrtNumber = Math.sqrt(number);
    
    for (let i = INITIAL_NUMBER + 1; i < number; i++) {
        if (i > sqrtNumber) {
            printDebug(`Factor "${i}" is greater than "${sqrtNumber}" square root of "${number}"`);

            return true;
        }

        if (number % i === 0) {
            printDebug(`No, "${number}" is not a prime number`);

            return false;
        }
    }

    printDebug(`Yes, "${number}" is a prime number`);

    return true;
}

function printDebug(text) {
    if (process.env.DEBUG) console.log(text);
}

module.exports = {
    getPrimeNumbers
};