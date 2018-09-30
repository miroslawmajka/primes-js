const INITIAL_NUMBER = 2;

function getPrimeNumbers(targetNumber) {
    const primeNumbers = [INITIAL_NUMBER];

    let i = INITIAL_NUMBER + 1;

    while (primeNumbers.length < targetNumber) {
        if (isPrime(i)) primeNumbers.push(i);

        i++;
    }

    return primeNumbers;
}

function isPrime(number) {
    console.log(`Checking if "${number}" is prime...`);

    for (let i = INITIAL_NUMBER; i < number; i++) {
        if (number % i === 0) {
            console.log(`No, "${number}" is not a prime.`);

            return false;
        }
    }

    console.log(`Yes, "${number}" is prime.`);

    return true;
}

module.exports = {
    getPrimeNumbers
};