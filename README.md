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
node index.js -n NUMBER
```
Where **NUMBER** is the n-th prime number (whole number).

You can add a **.env** file with the following contents to the root of this project:
```
DEBUG=true
```
This will cause the script to print debugging information about the prime generation.

---

# What's Good

To generate 1,000,000 primes the algorithm took 26.609 seconds.

---

# What's Bad

TODO