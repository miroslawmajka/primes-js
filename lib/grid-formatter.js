/**
 * @deprecated Inefficient with high number of prime numbers due to memory constraints
 * @param primeNumbers Array of prime numbers
 */
function getGridString(primeNumbers) {
    const header = `| |${primeNumbers.join('|')}|\n`;

    const rows = [];

    for (let i = 0; i < primeNumbers.length; i++) {
        const rowHeadValue = primeNumbers[i];

        let row = `|${rowHeadValue}`;

        for (let j = 0; j < primeNumbers.length; j++) {
            const multipliedValue = rowHeadValue * primeNumbers[j];

            row = `${row}|${multipliedValue}`;
        }

        row = `${row}|`;

        rows.push(row);
    }

    return `${header}${rows.join('\n')}`;
}

/**
 * @description Printing the rows of the grid as we process them
 * @param primeNumbers Array of prime numbers
 * @param print Injectable printing function
 */
function printGridWith(primeNumbers, print = console.log) {
    const header = `| |${primeNumbers.join('|')}|`;

    print(header);

    for (let i = 0; i < primeNumbers.length; i++) {
        const rowHeadValue = primeNumbers[i];

        let row = `|${rowHeadValue}`;

        for (let j = 0; j < primeNumbers.length; j++) {
            const multipliedValue = rowHeadValue * primeNumbers[j];

            row = `${row}|${multipliedValue}`;
        }

        print(`${row}|`);
    }
}

module.exports = {
    getGridString,
    printGridWith
};