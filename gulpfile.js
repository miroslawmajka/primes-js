const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');
const istanbul = require('gulp-istanbul');

const argv = require('./lib/argv');
const defaults = require('./lib/defaults');
const index = require('./index');

const packageJson = require('./package.json');

const LINT_TASK = 'lint';
const UNIT_TESTS_TASK = 'test';
const RUN_TASK = 'run';
const ISTANBUL_PRE_TASK = 'istanbul';

const UNIT_TESTS_PATH = 'test/**/*.test.js';
const LIB_PATH = 'lib/**/*.js';

const LINT_PATHS = [
    LIB_PATH,
    UNIT_TESTS_PATH,
    '*.js'
];

gulp.task('default', () => {
    console.log();
    console.log(`${packageJson.description} ${packageJson.version}`);
    console.log();
    console.log('Development commands:');
    console.log(`  gulp ${LINT_TASK}\t\tRun ESLint against all JavaScript files.`);
    console.log(`  gulp ${UNIT_TESTS_TASK}\t\tRun Mocha unit tests and see code coverage.`);
    console.log('  npm test\t\tRun ESLint and Mocha unit tests together.');
    console.log();
    console.log('Parameters:');
    console.log('  --specs\t\tOverride the "*.js" test files to run in Mocha.');
    console.log(`  --timeout\t\tOverride the default (${defaults.timeouts.oneMinute}ms) timeout in Mocha.`);
    console.log();
    console.log('Running the algorithm:');
    console.log(`  gulp ${RUN_TASK} -n NUMBER`);
    console.log('    OR');
    console.log(`  gulp ${RUN_TASK} --number NUMBER`);
});

gulp.task(LINT_TASK, () => gulp
    .src(LINT_PATHS)
    .pipe(eslint())
    .pipe(eslint.format('stylish'))
    .pipe(eslint.failAfterError()))
    .once('error', handleError);

gulp.task(ISTANBUL_PRE_TASK, () => gulp
    .src([LIB_PATH])
    .pipe(istanbul())
    .pipe(istanbul.hookRequire()))
    .once('error', handleError);

gulp.task(UNIT_TESTS_TASK, [ISTANBUL_PRE_TASK], () => gulp
    .src(argv.specs ? [argv.specs] : [UNIT_TESTS_PATH])
    .pipe(mocha({
        reporter: 'spec',
        timeout: argv.timeout || defaults.timeouts.oneMinute,
        useColors: true
    }))
    .once('error', handleError)
    .pipe(istanbul.writeReports({ dir: defaults.paths.coverage })))
    .once('error', handleError);

gulp.task(RUN_TASK, () => index(argv.n || argv.number));

function handleError(err) {
    console.error('Gulp task failed:');
    console.error(err);

    process.exit(1);
}