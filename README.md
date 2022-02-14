# Athennian Technical Test
##### by Brett Bilyk

### Summary

- This repository contains code related to the Athennian technical test provided during the application process

### Notes about question, part 1:

- ```return``` added to line 12 to prevent stack overflow bug

### Notes about question, extra credit:

- mocha/chai/sinon testing added for:
  - ```getRefrain()```
  - ```getEnding()```
  - ```reciteLyrics()```

### Answer to extra credit question:

- In order to prevent additional errors in the scenario where functions are longer, and more complex with several conditions, it is best to take a test driven approach to prevent the recurrence of similar bugs in the future.

### To get started:

1. clone repository to your environment with ```git clone git@github.com:bilykb/athennian.git```
2. run ```npm install```
3. run ```node testQuestion.js``` to see console.log() output
4. run ```npm test``` to perform tests