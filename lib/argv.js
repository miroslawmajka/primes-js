const minimist = require('minimist');

/**
 * @type {Object}
 * @property {string} specs
 * @property {number} timeout
 * @property {number} n
 * @property {number} number
 */
const argv = minimist(process.argv.slice(2));

module.exports = argv;