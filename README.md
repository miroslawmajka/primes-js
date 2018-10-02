# primes-js
Prime Number Generator by Miroslaw Majka

Travis CI Build Status: [![BuildStatus](https://travis-ci.org/miroslawmajka/primes-js.svg?branch=master)](https://travis-ci.org/miroslawmajka/primes-js)

---

# Instructions
To run the application please do the following in your favourite CMD:
```
git clone https://github.com/miroslawmajka/primes-js.git
cd primes-js
npm install
npm install -g gulp
```

This will allow you to run:
```
npm test
```
This will run ESLint and Mocha unit tests against the code along with code coverage.

To see all available options simply the default **gulp** task:
```
gulp
```

To run the application you can use one of the following commands:
```
gulp run -n NUMBER
gulp run --number NUMBER
node index.js -n NUMBER
node index.js --number NUMBER
```
Where **NUMBER** is the n-th prime number (whole number).

You can add a **.env** file with the following contents to the root of this project:
```
DEBUG=true
```
This will cause the script to print debugging information about the prime generation.

---

# What's Good

* Travis CI integration which monitors the integrity of the code.
* To generate 1,000,000 primes the algorithm took 26.609 seconds.
* Gulp, Mocha, Istanbul, Sinon, Chai, ESLint all doing their parts.

---

# What could be Better

* A better algorithm can be implemented using the [Wikibook](https://en.m.wikibooks.org/wiki/Some_Basic_and_Inefficient_Prime_Number_Generating_Algorithms)
along with some basic metrics added when running unit tests for very large numbers (e.g. > 1,000,000).
* A web interface could be implemented with an Express package that would show the result in HTML format.
* A tidy up of the logger to have a consistent logger/print module