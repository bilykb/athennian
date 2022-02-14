const { expect } = require('chai');
const sinon = require('sinon');
const { getRefrain, getEnding } = require('../testQuestion');

describe('getRefrain(number)', function() {
  it('should return a string', function() {

    const songVerse = getRefrain(5);

    expect(songVerse).to.be.a('string');
  })
  it('should return a string indicating the number of beers on the wall', function() {

    const songVerse = getRefrain(5);
    const expectedOutput = `5 bottles of beer on the wall\n5 bottles of beer\ntake one down, pass it around 4 bottles of beer on the wall`

    expect(songVerse).to.equal(expectedOutput);
  })
})
