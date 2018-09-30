const minimist = require('minimist');

/**
 * @type {Object}
 * @property {string} specs
 * @property {number} timeout
 * @property {string} grep
 * @property {boolean} invert
 */
const argv = minimist(process.argv.slice(2));

module.exports = argv;