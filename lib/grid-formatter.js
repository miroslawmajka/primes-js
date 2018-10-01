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

module.exports = {
    getGridString
};